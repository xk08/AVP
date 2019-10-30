import { Component, OnInit } from '@angular/core';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profissional-conteudo',
  templateUrl: './profissional-conteudo.page.html',
  styleUrls: ['./profissional-conteudo.page.scss']
})
export class ProfissionalConteudoPage implements OnInit {
  public todoConteudoTexto: ProfissionalConteudoTexto[];

  public idUsuario: string;

  // Referente a criação de texto pelo profissional
  public todasTexto: ProfissionalConteudoTexto = {
    tituloTexto: '',
    autorTexto: '',
    texto: '',
    maisInfoTexto: ''
  };

  public tituloTexto: string;
  public autorTexto: string;
  public texto: string;
  public maisInfoTexto: string;

  constructor(
    private conteudoTextoService: ProfissionalConteudoTextoService,
    private router: Router,
    private auth: AngularFireAuth,
    private navctrl: NavController
  ) {}

  public listTexto: Subscription;

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;

    this.conteudoTextoService.getTodo(this.idUsuario).subscribe(res => {
      this.todasTexto = res;
    });

    /* pegando dados especificos
    this.listTexto = this.conteudoTextoService.getTodos(this.idUsuario).subscribe(res => {
      this.tituloTexto = res.tituloTexto ;
      this.autorTexto = res.autorTexto ;
      this.texto = res.texto ;
      this.maisInfoTexto = res.maisInfoTexto ;
    });
  }



  /*
  mandaPraTelaCadastroEmergencia() {
    this.navctrl.navigateForward('/emergencia/emergencia-cadastro');
    this.listTexto;
  }
  */
  }
  profissionalConteudoTexto() {}

  profissionalConteudoImagem() {}

  profissionalConteudoVideo() {}
}
