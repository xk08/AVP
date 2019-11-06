import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagemDetalhesPage } from './imagem-detalhes.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ImagemDetalhesPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ImagemDetalhesPage]
})
export class ImagemDetalhesPageModule {}
