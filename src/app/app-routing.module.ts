import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducaoComponent } from './componentes/introducao/introducao.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ConhecimentosComponent } from './componentes/conhecimentos/conhecimentos.component';


const routes: Routes = [
  {path: '', component: IntroducaoComponent},
  {path: 'projetos', component: ProjectsComponent},
  {path: 'conhecimentos', component: ConhecimentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
