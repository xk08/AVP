import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { QueroConversarService } from 'src/app/services/queroConversar/quero-conversar.service';
import { ActivatedRoute } from '@angular/router';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';

@Component({
  selector: 'app-profissional-conteudo-especifico',
  templateUrl: './profissional-conteudo-especifico.page.html',
  styleUrls: ['./profissional-conteudo-especifico.page.scss']
})
export class ProfissionalConteudoEspecificoPage implements OnInit, OnDestroy {
  public idadeGlobal: number;
  public idadeDoIFF: string;
  public admin: boolean;
  public idadeUsuario: number;
  public idadeConvertida: number;



  idUsuario: string;

  // Referente ao texto
  public tituloTextoTela: string;
  public descricaoTextoTela: string;
  public autorTextoTela: string;

  //Referente a imagem
  public tituloImagemTela: string;
  public maisInfoImagemTela: string;
  public imagem64Tela: string;
  public autorImagemTela: string;

  //Referente ao video
  public tituloVideoTela: string;
  public descricaoVideoTela: string;
  public linkVideoTela: string;
  public autorVideoTela: string;

  //valor pego da classificação
  public avalicaoQueroConversar: number;

  public profissionalConteudoTexto: ProfissionalConteudoTexto[];
  public profissionalConteudoImagem: ProfissionalConteudoImagem[];
  public profissionalConteudoVideo: ProfissionalConteudoVideo[];

  public listProfissionalConteudoTexto: Subscription;
  public listProfissionalConteudoImagem: Subscription;
  public listProfissionalConteudoVideo: Subscription;
  public listUsuario: Subscription;

  public avaliacaoGlobal: number;

  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private profissionalConteudoTextoService: ProfissionalConteudoTextoService,
    private profissionalConteudoImagemService: ProfissionalConteudoImagemService,
    private profissionalConteudoVideoService: ProfissionalConteudoVideoService,
    private queroConversarService: QueroConversarService,
    private route: ActivatedRoute,
    private usuarioCadastro: UsuarioCadastroService,
  ) {}

  public listQueroConversar: Subscription;

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;

    this.buscaDadosTexto(this.idUsuario);
    this.buscaDadosImagem(this.idUsuario);
    this.buscaDadosVideo(this.idUsuario);
  }

  buscaDadosTexto(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
      this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
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

  buscaDadosImagem(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
    this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
      this.avalicaoQueroConversar = res.avaliacao;
      this.avaliacaoGlobal = this.avalicaoQueroConversar;

      // Atribuindo na pesquisa
      this.profissionalConteudoImagemService
        .getTodosPoAvaliacao(this.avaliacaoGlobal)
        .subscribe(res => {
          this.profissionalConteudoImagem = res;

          // Percorrendo os dados da coleção
          res.forEach(x => {
            this.tituloImagemTela = x.tituloImagem;
            this.maisInfoImagemTela = x.maisInfoImagem;
            this.autorImagemTela = x.autorImagem;
            this.imagem64Tela = x.imagem;
          });
        });
    });
  }

  buscaDadosVideo(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
    this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
      this.avalicaoQueroConversar = res.avaliacao;
      this.avaliacaoGlobal = this.avalicaoQueroConversar;

      // Atribuindo na pesquisa
      this.profissionalConteudoVideoService
        .getTodosPoAvaliacao(this.avaliacaoGlobal)
        .subscribe(res => {
          this.profissionalConteudoVideo = res;

          // Percorrendo os dados da coleção
          res.forEach(x => {
            this.tituloVideoTela = x.tituloVideo;
            this.descricaoVideoTela = x.descricaoVideo;
            this.linkVideoTela = x.linkVideo;
            this.autorVideoTela = x.autorVideo;
          });
        });
    });
  }
  ngOnDestroy() {}
}
