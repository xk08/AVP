import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit, OnDestroy {

  urlEmbd: string;
  finalLink: string;


  idUsuario: string;
  public idadeGlobal: number;
  public idadeDoIFF: string;
  public admin: boolean;
  public idadeUsuario: number;
  public idadeConvertida: number;

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

  //Dos toggles
  public mostraMaisInfoTexto: boolean = false;
  public mostraMaisInfoImagem: boolean = false;
  public mostraMaisInfoVideo: boolean = false;


  constructor(
    private navctrl: NavController,
    private auth: AngularFireAuth,
    private usuarioCadastro: UsuarioCadastroService,
    private profissionalConteudoTextoService: ProfissionalConteudoTextoService,
    private profissionalConteudoImagemService: ProfissionalConteudoImagemService,
    private profissionalConteudoVideoService: ProfissionalConteudoVideoService,
    private route: ActivatedRoute,
    private dom: DomSanitizer,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.buscaDadosTexto(this.idUsuario);
    this.buscaDadosImagem(this.idUsuario);
    this.buscaDadosVideo(this.idUsuario);

  }

  /* TEXTO */
  buscaDadosTexto(idUsuario) {
    //Pegando algunas dados do usuário (como idade e se é profissional)
    this.listUsuario = this.usuarioCadastro
      .getUsuario(this.idUsuario)
      .subscribe(res => {
        this.admin = res.isProfissional;

        //Pegando a data de nascimento da coleção
        this.idadeUsuario = res.dataNasc;

        //Convertendo a data em idade
        var dob = new Date(this.idadeUsuario);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthdayThisYear = new Date(
          currentYear,
          dob.getMonth(),
          dob.getDate()
        );
        var age = currentYear - dob.getFullYear();
        this.idadeConvertida = age;

        //Testando a idade do usuário e atribuindo a uma variavel global
        if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
          this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
        } else {
        }

        if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
          this.idadeDoIFF = "13 a 17";
        } else {
        }

        if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
          this.idadeDoIFF = "18 anos ou mais";
        }

        //Buscando os dados do service em especifico
        this.listProfissionalConteudoTexto = this.profissionalConteudoTextoService
          .getTodosPorIdade(this.idadeDoIFF)
          .subscribe(res => {
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
    this.listUsuario = this.usuarioCadastro
      .getUsuario(this.idUsuario)
      .subscribe(res => {
        this.admin = res.isProfissional;
        //Pegando a data de nascimento da coleção
        this.idadeUsuario = res.dataNasc;

        //Convertendo a data em idade
        var dob = new Date(this.idadeUsuario);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthdayThisYear = new Date(
          currentYear,
          dob.getMonth(),
          dob.getDate()
        );
        var age = currentYear - dob.getFullYear();
        this.idadeConvertida = age;

        //Testando a idade do usuário e atribuindo a uma variavel global
        if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
          this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
        } else {
        }

        if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
          this.idadeDoIFF = "13 a 17";
        } else {
        }

        if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
          this.idadeDoIFF = "18 anos ou mais";
        }

        //Buscando os dados do service em especifico
        this.listProfissionalConteudoImagem = this.profissionalConteudoImagemService
          .getTodosPorIdade(this.idadeDoIFF)
          .subscribe(res => {
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
    this.listUsuario = this.usuarioCadastro
      .getUsuario(this.idUsuario)
      .subscribe(res => {
        this.admin = res.isProfissional;
        //Pegando a data de nascimento da coleção
        this.idadeUsuario = res.dataNasc;

        //Convertendo a data em idade
        var dob = new Date(this.idadeUsuario);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthdayThisYear = new Date(
          currentYear,
          dob.getMonth(),
          dob.getDate()
        );
        var age = currentYear - dob.getFullYear();
        this.idadeConvertida = age;

        //Testando a idade do usuário e atribuindo a uma variavel global
        if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
          this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
        } else {
        }

        if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
          this.idadeDoIFF = "13 a 17";
        } else {
        }

        if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
          this.idadeDoIFF = "18 anos ou mais";
        }

        //Buscando os dados do service em especifico
        this.listProfissionalConteudoVideo = this.profissionalConteudoVideoService
          .getTodosPorIdade(this.idadeDoIFF)
          .subscribe(res => {

            //Pegando a coleção inteira
            this.profissionalConteudoVideoTela = res;

               //Percorrendo a coleçção e pegando os campos
            res.forEach(x => {
                this.tituloVideoTela = x.tituloVideo;
                this.descricaoVideoTela = x.descricaoVideo;
                this.autorVideoTela = x.autorVideo;
                this.linkVideoTela = x.linkVideo;
              });

              if(this.tituloVideoTela != null){
                this.openNotificacao(this.tituloVideoTela)
                console.log("essa aqui"+this.tituloVideoTela)
              
              }
              
          });
      });
  }

  openNotificacao(titulo: string) {

    this.localNotifications.schedule({
      title: "Nova Video Disponível",
      text: titulo,
      trigger: { at: new Date(new Date().getTime() + 2000) },
      led: 'FF0000',
      sound: null
    });
  }

  //Ver como pego de acordo com o link do app do youtube no celu
  /// que é assim -> https://youtu.be/Pi-s0ZFK3aM
  
  public videoDoYT(vid) {
    this.finalLink = vid.substring(vid.indexOf('=') + 1);
    this.urlEmbd = `https://www.youtube.com/embed/${this.finalLink}`;

    return this.dom.bypassSecurityTrustResourceUrl(this.urlEmbd);
  }


  direcionaPraTela() {
    this.navctrl.navigateForward("quero-conversar");
  }

  ngOnDestroy() {
    this.listUsuario.unsubscribe();
    this.listProfissionalConteudoTexto.unsubscribe();
    this.listProfissionalConteudoImagem.unsubscribe();
    this.listProfissionalConteudoVideo.unsubscribe();
  }
}
