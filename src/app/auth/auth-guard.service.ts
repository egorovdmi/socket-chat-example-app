import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import * as fromRoot from '../reducers';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<fromRoot.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(fromRoot.getIsLoggedIn),
      take(1),
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/signin']);
        }
        return isLoggedIn;
      })
    );
  }
}
