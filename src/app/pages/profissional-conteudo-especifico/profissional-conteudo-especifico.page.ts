import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { QueroConversarService } from 'src/app/services/queroConversar/quero-conversar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profissional-conteudo-especifico',
  templateUrl: './profissional-conteudo-especifico.page.html',
  styleUrls: ['./profissional-conteudo-especifico.page.scss']
})
export class ProfissionalConteudoEspecificoPage implements OnInit, OnDestroy {
  idUsuario: string;


  public tituloTextoTela: string;
  public descricaoTextoTela: string;
  public autorTextoTela: string;


  public avalicaoQueroConversar: number;

  public profissionalConteudoTexto: ProfissionalConteudoTexto[];
  public listProfissionalConteudoTexto: Subscription;

  public avaliacaoGlobal: number;

  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private profissionalConteudoTextoService: ProfissionalConteudoTextoService,
    private queroConversarService: QueroConversarService,
    private route: ActivatedRoute
  ) {}

  public listQueroConversar: Subscription;

  ngOnInit() {
  
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.buscaDadosTexto(this.idUsuario);


  }

  buscaDadosTexto(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
    this.listQueroConversar = this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
      this.avalicaoQueroConversar = res.avaliacao;
      this.avaliacaoGlobal = this.avalicaoQueroConversar;

      // Atribuindo na pesquisa
      this.profissionalConteudoTextoService
        .getTodosPoAvaliacao(this.avaliacaoGlobal)
        .subscribe(res => {
          this.profissionalConteudoTexto = res;

          // Percorrendo os dados da coleção
          res.forEach(x => {
            this.tituloTextoTela = x.tituloTexto;
            this.descricaoTextoTela = x.texto;
            this.autorTextoTela = x.autorTexto;
          });
        });
    });
  }
  ngOnDestroy() {
    this.listQueroConversar.unsubscribe();
  }
}
