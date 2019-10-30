import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'profissional-conteudo',
        loadChildren: '../profissional-conteudo/profissional-conteudo.module#ProfissionalConteudoPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MenuPage]
})
export class MenuPageModule {}
