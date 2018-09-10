import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromRoot from './reducers';
import { SignOutAction } from './auth/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'socket-chat-example-app';
  isLoggedIn = false;

  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  ngOnInit() {
    this.store.pipe(
      select(fromRoot.getIsLoggedIn),
    ).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  onLogout() {
    this.store.dispatch(new SignOutAction());
    this.router.navigate(['/signin']);
  }
}
