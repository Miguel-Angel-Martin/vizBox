import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ChildInfo, ShellCommunicationService } from '@avl-services/ng-services';

/**
 * Guard for the page not found on which you have to be logged in to view.
 */
@Injectable()
export class PageNotFoundGuard implements CanActivate {
  constructor(
    private shellCommunicationService: ShellCommunicationService,
    private readonly location: Location
  ) {}

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.shellCommunicationService.isChild
      ? this.delegateSiblingsNavToShell(state.url)
      : of(true);
  }

  private delegateSiblingsNavToShell(url: string): Observable<boolean> {
    const siblings = this.shellCommunicationService.shellInfo?.children.filter((child) =>
      this.urlContainsName(child.name, url)
    );

    if (siblings.length) {
      const navUrl = this.constructChildUrl(siblings[0], url);
      this.shellCommunicationService.notifyShellAboutNavigation(navUrl);
      return of(false);
    }
    return of(true);
  }

  private constructChildUrl(sibling: ChildInfo, url: string): string {
    return this.location.normalize(sibling.url) + '/' + url.replace('/' + sibling.name, '');
  }

  private urlContainsName(name: string, url): boolean {
    return name === url.split('/')[1]?.split('?')[0];
  }
}
