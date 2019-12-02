import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalPerfilPage } from './profissional-perfil.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalPerfilPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfissionalPerfilPage]
})
export class ProfissionalPerfilPageModule {}
