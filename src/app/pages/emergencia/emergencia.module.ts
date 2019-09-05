import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergenciaPage } from './emergencia.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EmergenciaPage,
    children: [
      {
        path: 'emergencia-cadastro',
        loadChildren:
          '../emergencia-cadastro/emergencia-cadastro.module#EmergenciaCadastroPageModule'
      },
      {
        path: 'emergencia-utilizacao',
        loadChildren:
          '../emergencia-utilizacao/emergencia-utilizacao.module#EmergenciaUtilizacaoPageModule'
      },
      {
        path: '',
        redirectTo: '/emergencia/emergencia-cadastro',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [EmergenciaPage]
})
export class EmergenciaPageModule {}
