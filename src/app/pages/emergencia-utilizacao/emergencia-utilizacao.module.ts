import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergenciaUtilizacaoPage } from './emergencia-utilizacao.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EmergenciaUtilizacaoPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [EmergenciaUtilizacaoPage]
})
export class EmergenciaUtilizacaoPageModule {}
