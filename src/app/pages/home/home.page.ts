import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { Subscription } from 'rxjs';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  idUsuario: string;
  public idadeGlobal: number;
  public idadeDoIFF: string;
  public admin: boolean;
  public idadeUsuario: number;

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

  //Arrays de conteúdo / para a tela
  public profissionalConteudoTextoTela: ProfissionalConteudoTexto[];
  public profissionalConteudoImagemTela: ProfissionalConteudoImagem[];
  public profissionalConteudoVideoTela: ProfissionalConteudoVideo[];

  //Listas de conteúdos
  public listProfissionalConteudoTexto: Subscription;
  public listProfissionalConteudoImagem: Subscription;
  public listProfissionalConteudoVideo: Subscription;
  public listUsuario: Subscription;

  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private usuarioCadastro: UsuarioCadastroService,
    private profissionalConteudoTextoService: ProfissionalConteudoTextoService,
    private profissionalConteudoImagemService: ProfissionalConteudoImagemService,
    private profissionalConteudoVideoService: ProfissionalConteudoVideoService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.buscaDadosTexto(this.idUsuario);
    this.buscaDadosImagem(this.idUsuario);
    this.buscaDadosVideo(this.idUsuario);
  }

  /* TEXTO */
  buscaDadosTexto(idUsuario) {
    //Pegando algunas dados do usuário (como idade e se é profissional)
    this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(res => {
      this.admin = res.isProfissional;
      this.idadeUsuario = res.dataNasc;
      this.idadeGlobal = this.idadeUsuario;

      //Testando a idade do usuário e atribuindo a uma variavel global
      if (this.idadeGlobal >= 8 && this.idadeGlobal <= 12) {
        this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
      } else {
      }

      if (this.idadeGlobal >= 13 && this.idadeGlobal <= 17) {
        this.idadeDoIFF = '13 a 17';
      } else {
      }

      if (this.idadeGlobal >= 18 && this.idadeGlobal <= 35) {
        this.idadeDoIFF = '18 a 35';
      }

      //Buscando os dados do service em especifico
      this.listProfissionalConteudoTexto = this.profissionalConteudoTextoService.getTodosPorIdade(this.idadeDoIFF).subscribe(res => {

        //Pegando a coleção inteira
        this.profissionalConteudoTextoTela = res;

        //Percorrendo a coleçção e pegando os campos
        res.forEach(x => {
          this.tituloTextoTela = x.tituloTexto;
          this.descricaoTextoTela = x.texto;
          this.autorTextoTela = x.autorTexto;
        });
      });
    });
  }

  /* IMAGEM */
  buscaDadosImagem(idUsuario) {
    //Pegando algunas dados do usuário (como idade e se é profissional)
    this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(res => {
      this.admin = res.isProfissional;
      this.idadeUsuario = res.dataNasc;
      this.idadeGlobal = this.idadeUsuario;

      //Testando a idade do usuário e atribuindo a uma variavel global
      if (this.idadeGlobal >= 8 && this.idadeGlobal <= 12) {
        this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
      } else {
      }

      if (this.idadeGlobal >= 13 && this.idadeGlobal <= 17) {
        this.idadeDoIFF = '13 a 17';
      } else {
      }

      if (this.idadeGlobal >= 18 && this.idadeGlobal <= 35) {
        this.idadeDoIFF = '18 a 35';
      }

      //Buscando os dados do service em especifico
      this.listProfissionalConteudoImagem = this.profissionalConteudoImagemService.getTodosPorIdade(this.idadeDoIFF).subscribe(res => {

        //Pegando a coleção inteira
        this.profissionalConteudoImagemTela = res;

        //Percorrendo a coleçção e pegando os campos
        res.forEach(x => {
          this.tituloImagemTela = x.tituloImagem;
          this.maisInfoImagemTela = x.maisInfoImagem;
          this.autorImagemTela = x.autorImagem;
          this.imagem64Tela = x.imagem;
        });
      });
    });
  }

  /* VIDEO */
  buscaDadosVideo(idUsuario) {
    //Pegando algunas dados do usuário (como idade e se é profissional)
    this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(res => {
      this.admin = res.isProfissional;
      this.idadeUsuario = res.dataNasc;
      this.idadeGlobal = this.idadeUsuario;

      //Testando a idade do usuário e atribuindo a uma variavel global
      if (this.idadeGlobal >= 8 && this.idadeGlobal <= 12) {
        this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
      } else {
      }

      if (this.idadeGlobal >= 13 && this.idadeGlobal <= 17) {
        this.idadeDoIFF = '13 a 17';
      } else {
      }

      if (this.idadeGlobal >= 18 && this.idadeGlobal <= 35) {
        this.idadeDoIFF = '18 a 35';
      }

      //Buscando os dados do service em especifico
      this.listProfissionalConteudoVideo = this.profissionalConteudoVideoService.getTodosPorIdade(this.idadeDoIFF).subscribe(res => {

        //Pegando a coleção inteira
        this.profissionalConteudoVideoTela = res;

        //Percorrendo a coleçção e pegando os campos
        res.forEach(x => {
          this.tituloVideoTela = x.tituloVideo;
          this.descricaoVideoTela = x.descricaoVideo;
          this.linkVideoTela = x.linkVideo;
          this.autorVideoTela = x.autorVideo;
        });
      });
    });
  }

  /*
  profissionalConteudoTexto() {}

  profissionalConteudoImagem() {}

  profissionalConteudoVideo() {}
  */

  direcionaPraTela() {
    this.navctrl.navigateForward('quero-conversar');
  }

  ngOnDestroy() {
    this.listUsuario.unsubscribe();
    this.listProfissionalConteudoTexto.unsubscribe();
    this.listProfissionalConteudoImagem.unsubscribe();
    this.listProfissionalConteudoVideo.unsubscribe();
  }
}
