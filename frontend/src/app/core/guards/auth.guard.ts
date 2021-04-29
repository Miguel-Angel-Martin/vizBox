import { Inject, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map, skipWhile, tap } from 'rxjs/operators';

import { AuthConfig, AUTH_CONFIG, AvlAuthService } from '@avl-ng-controls/auth';
import { ShellCommunicationService } from '@avl-services/ng-services';

/**
 * Guard for the routes on which you have to be logged in to view.
 */
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  public isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AvlAuthService,
    private location: Location,
    private router: Router,
    private shellCommunicationService: ShellCommunicationService,
    @Inject(AUTH_CONFIG) private authConfig: AuthConfig
  ) {}

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin(state.url);
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }

  public canLoad(route: Route): Observable<boolean> {
    return this.checkLogin(route.path);
  }

  private checkLogin(path: string): Observable<boolean> {
    const redirectUrl = location.origin + this.location.prepareExternalUrl(path);
    if (this.shellCommunicationService.isChild) {
      return this.childAppLogin$(redirectUrl);
    }

    return this.standaloneAppLogin$(redirectUrl);
  }

  private standaloneAppLogin$(redirectUrl: string): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap((isLoggedIn) => this.handleRolesAndError(isLoggedIn, redirectUrl)));
  }

  private handleRolesAndError(isLoggedIn: boolean, redirectUrl: string): void {
      if (isLoggedIn) {
        if (!this.hasRequiredRole()) {
          this.redirectToErrorPage('You do not have required role to visit this page');
        }
      } else this.checkErrorMessage(redirectUrl);
  }

  private hasRequiredRole(): boolean {
    return (
      !this.authConfig.requiredRole ||
      this.authService.currentUser.roles?.includes(this.authConfig.requiredRole)
    );
  }

  private checkErrorMessage(redirectUrl: string): void {
    if (this.authService.errorMessage) {
      this.redirectToErrorPage(this.authService.errorMessage);
    } else {
      this.authService.login(redirectUrl);
    }
  }

  private redirectToErrorPage(errorMessage: string): void {
    const routerState = { errorMessage };
    this.router.navigateByUrl('/error-page', { state: routerState }).then((_) => {
      this.authService.clearErrorMessage();
    });
  }

  // Subscription on redirectedFromLogin, if it wasn't redirected, notifies shell about login.
  // If it was redirected waits for the user object. Resolves to true if both subscriptions resolves to true.
  private childAppLogin$(redirectUrl: string): Observable<boolean> {
    return zip(
      this.shellCommunicationService.redirectedFromLogIn.pipe(
        map((redirectedFromLogIn) =>
          this.handleRedirectedFromLogin(redirectedFromLogIn, redirectUrl)
        )
      ),
      this.authService.user$.pipe(
        skipWhile((user) => user === undefined),
        map((user) => Boolean(user))
      )
    ).pipe(
      map(([_, userExists]) => userExists),
      tap((userExists) => this.handleRolesAndError(userExists, redirectUrl)));
  }

  private handleRedirectedFromLogin = (isRedirected: boolean, redirectUrl: string): boolean => {
    if (isRedirected === false) {
      this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
    }
    return isRedirected;
  };
}
