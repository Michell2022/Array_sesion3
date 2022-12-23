import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImprimirModule } from './imprimir/imprimir.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImprimirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
