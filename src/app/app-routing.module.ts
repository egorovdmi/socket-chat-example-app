import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatContainerComponent } from './chat/containers/chat-container/chat-container.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatContainerComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
