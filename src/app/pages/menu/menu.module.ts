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
        path: 'texto-detalhes/:id',
        loadChildren: '../texto-detalhes/texto-detalhes.module#TextoDetalhesPageModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'imagem-detalhes/:id',
        loadChildren: '../imagem-detalhes/imagem-detalhes.module#ImagemDetalhesPageModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'video-detalhes/:id',
        loadChildren: '../video-detalhes/video-detalhes.module#VideoDetalhesPageModule',
        canActivate: [AuthGuard]
      },

      {
        path: 'profissional-conteudo',
        loadChildren:
          '../profissional-conteudo/profissional-conteudo.module#ProfissionalConteudoPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'profissional-todos-conteudos',
        loadChildren:
          '../profissional-seus-conteudos/profissional-seus-conteudos.module#ProfissionalSeusConteudosPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'usuario-perfil',
        loadChildren:
          '../usuario-perfil/usuario-perfil.module#UsuarioPerfilPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'profissional-perfil',
        loadChildren:
          '../profissional-perfil/profissional-perfil.module#ProfissionalPerfilPageModule',
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
export class MenuPageModule { }
