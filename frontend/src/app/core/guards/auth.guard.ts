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
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthConfig, AUTH_CONFIG, AvlAuthService, ShellCommunicationService } from '@avl-services/ng-services';

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
      } else {
        this.checkErrorMessage(redirectUrl);
      }
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
      if (!this.shellCommunicationService.isChild) {
        this.authService.login(redirectUrl);
      } else if (!this.authService.errorMessage) {
        this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
      }
    }
  }

  private redirectToErrorPage(errorMessage: string): void {
    const routerState = { errorMessage };
    this.router.navigateByUrl('/error-page', { state: routerState }).then((_) => {
      this.authService.clearErrorMessage();
    });
  }

  // Subscription on isLoggedIn. Resolves to true if user is logged in.
  private childAppLogin$(redirectUrl: string): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      map((value: boolean) => {
        if (!value) {
          this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
        } else {
          this.handleRolesAndError(value, redirectUrl)
        }
        return value;
      }));
  }

  private handleRedirectedFromLogin = (isRedirected: boolean, redirectUrl: string): boolean => {
    if (isRedirected === false) {
      this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
    }
    return isRedirected;
  };
}
