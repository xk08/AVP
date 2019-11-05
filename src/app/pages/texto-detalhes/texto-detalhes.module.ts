import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextoDetalhesPage } from './texto-detalhes.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TextoDetalhesPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TextoDetalhesPage]
})
export class TextoDetalhesPageModule {}
