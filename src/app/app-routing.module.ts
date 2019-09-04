import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
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
      './pages/cadastro-assistente/cadastro-assistente.module#CadastroAssistentePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
