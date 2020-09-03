import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {AuthStore} from './auth.store';
import {Observable} from 'rxjs';
import {first, tap} from 'rxjs/operators';

@Injectable()
export class CanLoadAuthGuard implements CanLoad {
  constructor(private authStore: AuthStore, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authStore.isLoggedIn$
      .pipe(
        first(),
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
