import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetalhesPage } from './video-detalhes.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VideoDetalhesPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [VideoDetalhesPage]
})
export class VideoDetalhesPageModule {}
