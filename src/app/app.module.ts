import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//Importação do exportador routing module

import { AppComponent } from './app.component';
import { IntroducaoComponent } from './componentes/introducao/introducao.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ConhecimentosComponent } from './componentes/conhecimentos/conhecimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ProjectsComponent,
    ConhecimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
