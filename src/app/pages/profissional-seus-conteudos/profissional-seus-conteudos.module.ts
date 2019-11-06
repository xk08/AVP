import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalSeusConteudosPage } from './profissional-seus-conteudos.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalSeusConteudosPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ProfissionalSeusConteudosPage]
})
export class ProfissionalSeusConteudosPageModule {}
