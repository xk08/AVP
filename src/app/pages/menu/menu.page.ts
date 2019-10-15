import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { AssistenteCadastroService } from 'src/app/services/assistenteCadastro/assistente-cadastro.service';
import { AssistenteCadastro } from 'src/app/services/assistenteCadastro/assistenteCadastro';

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

  paginasProfissional = [
    {
      title: 'HTesteome',
      url: '/menu/home',
      icon: 'add'
    }
  ];

  public isAdmin: boolean;
  public isProfissional: boolean;
  public nome: String;
  public foto: any;
  private subscriptionList: Subscription;

  private apelido: String;

  private list: Subscription;
  public listAC = new Array<AssistenteCadastro>();

  constructor(
    private authService: AngularFireAuth,
    private usuarioCadastroService: UsuarioCadastroService,
    private assistenteCadastroService: AssistenteCadastroService
  ) {}

  ngOnInit() {
    this.subscriptionList = this.usuarioCadastroService
      .getUsuario(this.authService.auth.currentUser.uid)
      .subscribe(res => {
        this.nome = res.nome;
        this.foto = res.foto;
        this.isAdmin = res.isAdmin;
        this.isProfissional = res.isProfissional;
      });

    // Descobrir como pega só 1 elemento, o id da pessoa ou do assisnte em si
    this.list = this.assistenteCadastroService.getTodos().subscribe(res => {
      this.listAC = res;
    });
  }

  signOut() {
    this.authService.auth.signOut();
  }

  ngOnDestroy() {
    this.subscriptionList.unsubscribe();
  }
}
