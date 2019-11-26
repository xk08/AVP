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
      title: 'Inicio',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Assistente Pessoal',
      url: '/assistente/cadastro',
      icon: 'logo-angular'
    },
    {
      title: 'Meu Perfil',
      url: '/assistente/cadastro',
      icon: 'person'
    }
  ];

  paginasProfissional = [
    {
      title: 'Inicio',
      url: '/menu/profissional-todos-conteudos',
      icon: 'home'
    },
    {
      title: 'Meu perfil',
      url: '/menu/profissional-todos-conteudos',
      icon: 'person'
    }
  ];

  public isAdmin: boolean;
  public isProfissional: boolean;
  public nomeUsuario: String;
  public fotoUsuario: any;

  public list: Subscription;
  public listUsuario: Subscription;

  public todoAssistente: AssistenteCadastro[];
  public apelido: string;
  public icone: any;
  public idAssistente: string;

  constructor(
    private authService: AngularFireAuth,
    private assistenteCadastroService: AssistenteCadastroService,
    private usuarioCadastroService: UsuarioCadastroService
  ) {}

  ngOnInit() {
    // Pegando dados do assistente para exibir na tela
    this.idAssistente = this.authService.auth.currentUser.uid;

    this.list = this.assistenteCadastroService.getTodo(this.idAssistente).subscribe(res => {
      this.apelido = res.apelido;
      this.icone = res.icone;
    });

    // Pegando dados do Usuário para exibir na tela
    this.listUsuario = this.usuarioCadastroService
      .getUsuario(this.authService.auth.currentUser.uid)
      .subscribe(res => {
        this.nomeUsuario = res.nome;
        this.fotoUsuario = res.foto;
        this.isProfissional = res.isProfissional;
      });
  }

  signOut() {
    this.authService.auth.signOut();
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
