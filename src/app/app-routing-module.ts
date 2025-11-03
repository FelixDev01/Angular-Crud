import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarIdeia } from './shared/ideias/listar-ideia/listar-ideia';
import { CriarIdeias } from './shared/ideias/criar-ideias/criar-ideias';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listar-ideia',
    pathMatch: 'full'
  },

  {
    path: 'listar-ideia',
    component: ListarIdeia
  },

  {
    path: 'nova-ideia',
    component: CriarIdeias
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
