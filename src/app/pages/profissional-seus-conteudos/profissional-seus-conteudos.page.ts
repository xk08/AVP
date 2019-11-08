import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { Subscription } from 'rxjs';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profissional-seus-conteudos',
  templateUrl: './profissional-seus-conteudos.page.html',
  styleUrls: ['./profissional-seus-conteudos.page.scss']
})
export class ProfissionalSeusConteudosPage implements OnInit, OnDestroy {
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

  public avaliacaoGlobal: number;

  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private profissionalConteudoTextoService: ProfissionalConteudoTextoService,
    private profissionalConteudoImagemService: ProfissionalConteudoImagemService,
    private profissionalConteudoVideoService: ProfissionalConteudoVideoService,
    private route: ActivatedRoute
  ) {}

  public listQueroConversar: Subscription;

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;

    this.buscaDadosTexto(this.idUsuario);
    this.buscaDadosImagem(this.idUsuario);
    this.buscaDadosVideo(this.idUsuario);
  }

  buscaDadosTexto(idUsuario) {
    this.listProfissionalConteudoTexto = this.profissionalConteudoTextoService
      .getTodosPorID(this.idUsuario)
      .subscribe(res => {
        this.profissionalConteudoTexto = res;

        // Percorrendo os dados da coleção
        res.forEach(x => {
          this.tituloTextoTela = x.tituloTexto;
          this.descricaoTextoTela = x.texto;
          this.autorTextoTela = x.autorTexto;
        });
      });
  }

  apagaTextos(idUsuario: string) {
    console.log('esse é o id ' + idUsuario);
    this.profissionalConteudoTextoService.removeTodo(this.idUsuario);
  }

  buscaDadosImagem(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
    this.listProfissionalConteudoImagem = this.profissionalConteudoImagemService
      .getTodosPorID(this.idUsuario)
      .subscribe(res => {
        this.profissionalConteudoImagem = res;
        res.forEach(x => {
          this.tituloImagemTela = x.tituloImagem;
          this.maisInfoImagemTela = x.maisInfoImagem;
          this.autorImagemTela = x.autorImagem;
          this.imagem64Tela = x.imagem;
        });
      });
  }

  buscaDadosVideo(idUsuario) {
    this.listProfissionalConteudoVideo = this.profissionalConteudoVideoService
      .getTodosPorID(this.idUsuario)
      .subscribe(res => {
        this.profissionalConteudoVideo = res;

        res.forEach(x => {
          this.tituloVideoTela = x.tituloVideo;
          this.descricaoVideoTela = x.descricaoVideo;
          this.linkVideoTela = x.linkVideo;
          this.autorVideoTela = x.autorVideo;
        });
      });
  }

  ngOnDestroy() {
    this.listProfissionalConteudoTexto.unsubscribe();
    this.listProfissionalConteudoImagem.unsubscribe();
    this.listProfissionalConteudoVideo.unsubscribe();
  }

  direcionaPraTelaCadastro() {
    this.navctrl.navigateForward('/menu/profissional-conteudo/profissional-conteudo-texto');
  }
}
