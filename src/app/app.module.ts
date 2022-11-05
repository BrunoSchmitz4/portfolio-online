import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//Importação do exportador routing module

import { AppComponent } from './app.component';
import { IntroducaoComponent } from './componentes/introducao/introducao.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
