import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit, OnDestroy {
  paginas = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    }
  ];

  paginasAdmin = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    }
  ];

  public isAdmin: boolean;
  public nome: String;
  public foto: any;
  private subscriptionList: Subscription;

  constructor(
    private authService: AngularFireAuth,
    private usuarioCadastroService: UsuarioCadastroService
  ) {}

  ngOnInit() {
    this.subscriptionList = this.usuarioCadastroService
      .getUsuario(this.authService.auth.currentUser.uid)
      .subscribe(res => {
        this.nome = res.nome;
        this.foto = res.foto;
        this.isAdmin = res.isAdmin;
      });
  }

  signOut() {
    this.authService.auth.signOut();
  }

  ngOnDestroy() {
    this.subscriptionList.unsubscribe();
  }
}
