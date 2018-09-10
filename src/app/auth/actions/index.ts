import { Action } from '@ngrx/store';
import { SignIn } from '../models/sign-in';

export enum AuthActionTypes {
  SignIn = '[Auth] SignIn',
  SignOut = '[Auth] SignOut',
}

export class SignInAction implements Action {
  readonly type = AuthActionTypes.SignIn;

  constructor(public payload: SignIn) {}
}

export class SignOutAction implements Action {
    readonly type = AuthActionTypes.SignOut;
}

export type AuthActionsUnion = SignInAction | SignOutAction;
