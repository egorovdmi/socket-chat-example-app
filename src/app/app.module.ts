import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';

import { ChatEffects } from './chat/effects/chat.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
