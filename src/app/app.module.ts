import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';

import { ChatEffects } from './chat/effects/chat.effects';
import { ChatContainerComponent } from './chat/containers/chat-container/chat-container.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    SigninComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'Chat App',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ChatEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
