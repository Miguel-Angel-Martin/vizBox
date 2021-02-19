import { Injectable } from '@angular/core';
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

import { AvlAuthService } from '@avl-ng-controls/auth';
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
    private shellCommunicationService: ShellCommunicationService
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
      tap((isLoggedIn) => isLoggedIn || this.checkErrorMessage(redirectUrl))
    );
  }

  private checkErrorMessage(redirectUrl: string): void {
    if (this.authService.errorMessage) {
      this.redirectToErrorPage();
    } else {
      this.authService.login(redirectUrl);
    }
  }

  private redirectToErrorPage(): void {
    const routerState = { errorMessage: this.authService.errorMessage };
    this.router.navigateByUrl('/error-page', { state: routerState }).then((_) => {
      this.authService.clearErrorMessage();
    });
  }

  // Subscription on redirectedFromLogin, if it wasn't redirected, notifies shell about login.
  // If it was redirected waits for the user object. Resolves to true if both subscriptions resolves to true.
  private childAppLogin$(redirectUrl: string): Observable<boolean> {
    return zip(
      this.shellCommunicationService.redirectedFromLogIn.pipe(
        map((redirectedFromLogIn) => this.handleRedirectedFromLogin(redirectedFromLogIn, redirectUrl))
      ),
      this.authService.user$.pipe(
        skipWhile((user) => user === undefined),
        map((user) => Boolean(user))
      )
    ).pipe(
      map(([_, userExists]) => userExists)
    );
  }

  private handleRedirectedFromLogin = (isRedirected: boolean, redirectUrl: string): boolean => {
    if (isRedirected === false) {
      this.shellCommunicationService.notifyShellAboutLogin(redirectUrl);
    }
    return isRedirected;
  }
}
