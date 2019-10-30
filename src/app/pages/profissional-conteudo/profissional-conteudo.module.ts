import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalConteudoPage } from './profissional-conteudo.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalConteudoPage,
    children: [
      {
        path: 'profissional-conteudo-texto',
        loadChildren:
          '../profissional-conteudo-texto/profissional-conteudo-texto.module#ProfissionalConteudoTextoPageModule'
      },

      {
        path: 'profissional-conteudo-imagem',
        loadChildren:
          '../profissional-conteudo-imagem/profissional-conteudo-imagem.module#ProfissionalConteudoImagemPageModule'
      },

      {
        path: 'profissional-conteudo-video',
        loadChildren:
          '../profissional-conteudo-video/profissional-conteudo-video.module#ProfissionalConteudoVideoPageModule'
      },
      /*
      Responsável pela rota genérica
      {
        path: '',
        redirectTo: '/profissional-conteudo/profissional-conteudo-texto',
        pathMatch: 'full'
      }
      */
      {
        path: '',
        redirectTo: '/menu/profissional-conteudo',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ProfissionalConteudoPage]
})
export class ProfissionalConteudoPageModule {}
