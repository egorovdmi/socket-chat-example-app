import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { SignInAction } from '../actions';
import { SignIn } from '../models/sign-in';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  onSignin(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;
    this.store.dispatch(new SignInAction(new SignIn(login, password)));
    this.router.navigate(['/chat']);
  }
}
