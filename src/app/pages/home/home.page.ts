import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { Subscription } from 'rxjs';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { QueroConversarService } from 'src/app/services/queroConversar/quero-conversar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  idUsuario: string;
  public tituloTela: string;
  public textoTela: string;

  public admin: boolean;

  public avalicao: number;

  public texto: ProfissionalConteudoTexto[];

  public list: Subscription;

  public tituloGlobal: number;

  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private usuarioCadastro: UsuarioCadastroService,
    private conteudoTexto: ProfissionalConteudoTextoService,
    private queroConversarService: QueroConversarService
  ) {}

  public listQueroConversar: Subscription;
  public subscription: Subscription;

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.busca(this.idUsuario);

    this.subscription = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(res => {
      this.admin = res.isProfissional;
    });
  }

  busca(idUsuario) {
    this.listQueroConversar = this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
      this.avalicao = res.avaliacao;
      this.tituloGlobal = this.avalicao;
      console.log('Essa pohha -> ' + this.tituloGlobal);

      //Parte que pega o texto, teste

      this.conteudoTexto.getTodosPoAvaliacao(this.tituloGlobal).subscribe(res => {
        this.texto = res;

        // Arrumar essa p0ohha
        res.forEach(x => {
          this.tituloTela = x.tituloTexto;
          this.textoTela = x.texto;
          console.log('Exibindo titulo- >' + x.tituloTexto);
          console.log('Exibindo texto- >' + x.texto);
        });
      });
    });
  }

  // REfrente ao profissional
  profissionalConteudoTexto() {}

  profissionalConteudoImagem() {}

  profissionalConteudoVideo() {}

  direcionaPraTela() {
    this.navctrl.navigateForward('quero-conversar');
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
