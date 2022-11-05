import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducaoComponent } from './componentes/introducao/introducao.component';

const routes: Routes = [
  {path: '', component: IntroducaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
