import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },

  {
    path: 'usuario/cadastro',
    loadChildren: './pages/usuario-cadastro/usuario-cadastro.module#UsuarioCadastroPageModule'
  },
  {
    path: 'profissional/cadastro',
    loadChildren:
      './pages/profissional-cadastro/profissional-cadastro.module#ProfissionalCadastroPageModule'
  },
  {
    path: 'menu',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'assistente/cadastro',
    loadChildren:
      './pages/cadastro-assistente/cadastro-assistente.module#CadastroAssistentePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'emergencia',
    loadChildren: './pages/emergencia/emergencia.module#EmergenciaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'quero-conversar',
    loadChildren: './pages/quero-conversar/quero-conversar.module#QueroConversarPageModule',
    canActivate: [AuthGuard]
  }
  /*
  {
    path: 'profissional-conteudo-especifico',
    loadChildren:
      './pages/profissional-conteudo-especifico/profissional-conteudo-especifico.module#ProfissionalConteudoEspecificoPageModule'
  }
  */

  /* {
    path: 'profissional-conteudo',
    loadChildren:
      './pages/profissional-conteudo/profissional-conteudo.module#ProfissionalConteudoPageModule',
    canActivate: [AuthGuard]
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
