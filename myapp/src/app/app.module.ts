import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }