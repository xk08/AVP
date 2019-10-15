import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalConteudoVideoPage } from './profissional-conteudo-video.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalConteudoVideoPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ProfissionalConteudoVideoPage]
})
export class ProfissionalConteudoVideoPageModule {}
