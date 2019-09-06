import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueroConversarPage } from './quero-conversar.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: QueroConversarPage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [QueroConversarPage]
})
export class QueroConversarPageModule {}
