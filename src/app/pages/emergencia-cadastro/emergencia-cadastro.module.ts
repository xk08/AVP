import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergenciaCadastroPage } from './emergencia-cadastro.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EmergenciaCadastroPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [EmergenciaCadastroPage]
})
export class EmergenciaCadastroPageModule {}
