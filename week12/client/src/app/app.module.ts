import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { InputBarComponent } from 'src/components/input-bar/input-bar.component';
import { MessageContainerComponent } from 'src/components/message-container/message-container.component';
import { MessageComponent } from 'src/components/message/message.component';

import { AppComponent } from './app.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
  allowedHeaders: 'my-customer-header'
} };

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    InputBarComponent,
    MessageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
