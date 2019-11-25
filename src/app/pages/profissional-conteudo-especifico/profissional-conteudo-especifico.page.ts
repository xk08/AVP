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
import { DomSanitizer } from '@angular/platform-browser';

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

  // Referete aos videos do YT
  urlEmbd: string;
  finalLink: string;

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
    private dom: DomSanitizer
  ) {}

  public listQueroConversar: Subscription;

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.buscaIdadeUsuario();
    this.buscaDadosTexto(this.idUsuario);
    this.buscaDadosImagem(this.idUsuario);
    this.buscaDadosVideo(this.idUsuario);
  }

  buscaIdadeUsuario(){
    this.usuarioCadastro.getUsuario(this.idUsuario).subscribe( x => {
      this.idadeUsuario = x.dataNasc;

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
      
      if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
        this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
      }

      if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
        this.idadeDoIFF = "13 a 17";
      }

      if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
        this.idadeDoIFF = "18 anos ou mais";
      }

    });
  }

  buscaDadosTexto(idUsuario) {
    //Pegando os dados informados pelo usuário, sobre a sua situação
      this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
      this.avalicaoQueroConversar = res.avaliacao;
      this.avaliacaoGlobal = this.avalicaoQueroConversar;

      this.profissionalConteudoTextoService
      .getTodosPoAvaliacao(this.avaliacaoGlobal,this.idadeDoIFF)
      .subscribe(res => {
        this.profissionalConteudoTexto = res;
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
        .getTodosPoAvaliacao(this.avaliacaoGlobal, this.idadeDoIFF)
        .subscribe(res => {
          this.profissionalConteudoImagem = res;
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
        .getTodosPoAvaliacao(this.avaliacaoGlobal, this.idadeDoIFF)
        .subscribe(res => {
          this.profissionalConteudoVideo = res;
        });
    });
  }

  public videoDoYT(vid) {
    this.finalLink = vid.substring(vid.indexOf('=') + 1);
    this.urlEmbd = `https://www.youtube.com/embed/${this.finalLink}`;

    return this.dom.bypassSecurityTrustResourceUrl(this.urlEmbd);
  }


  ngOnDestroy() {}
}
