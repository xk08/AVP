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
  public list: Subscription;


  //-----
  public todoAssistente: AssistenteCadastro[];
  public apelido: string;
  public icone: any ;  
  public idAssistente: string;


  constructor(
    private authService: AngularFireAuth,
    private assistenteCadastroService: AssistenteCadastroService
  ) {}

  ngOnInit() {
        this.idAssistente = this.authService.auth.currentUser.uid;
        console.log(this.idAssistente) ; 

        this.list = this.assistenteCadastroService.getTodo(this.idAssistente).subscribe(res => {
        this.apelido = res.apelido ;
        this.icone = res.icone ;
      });

  }
      

  signOut() {
    this.authService.auth.signOut();
  }

  ngOnDestroy() {
    this.list.unsubscribe() ; 
  
  }
}
