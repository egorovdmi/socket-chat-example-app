import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';

import { ChatEffects } from './chat/effects/chat.effects';
import { ChatContainerComponent } from './chat/containers/chat-container/chat-container.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ChatEventsComponent } from './chat/components/chat-events/chat-events.component';
import { ChatMessageComponent } from './chat/components/chat-message/chat-message.component';
import { ChatCompleteCommandComponent } from './chat/components/chat-complete-command/chat-complete-command.component';
import { ChatDateCommandComponent } from './chat/components/chat-date-command/chat-date-command.component';
import { ChatMapCommandComponent } from './chat/components/chat-map-command/chat-map-command.component';
import { ChatRateCommandComponent } from './chat/components/chat-rate-command/chat-rate-command.component';
import { ChatFooterComponent } from './chat/components/chat-footer/chat-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    SigninComponent,
    ChatEventsComponent,
    ChatMessageComponent,
    ChatCompleteCommandComponent,
    ChatDateCommandComponent,
    ChatMapCommandComponent,
    ChatRateCommandComponent,
    ChatFooterComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDUFmigPs8q0Y7KJkOiY4yFxsImufbs9A'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
