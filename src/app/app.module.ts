import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { LookupComponent } from './lookup/lookup.component';
import { BaseComponent } from './base/base.component';

import { NgxSelectoModule } from 'ngx-selecto';
import { NgxMoveableModule, NgxMoveableComponent } from 'ngx-moveable';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    LookupComponent,
    BaseComponent,
    //NgxMoveableComponent,
  ],
  imports: [BrowserModule, NgxSelectoModule, NgxMoveableModule],
  exports: [NgxMoveableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
