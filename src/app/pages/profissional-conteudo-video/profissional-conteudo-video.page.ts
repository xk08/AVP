import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-profissional-conteudo-video',
  templateUrl: './profissional-conteudo-video.page.html',
  styleUrls: ['./profissional-conteudo-video.page.scss']
})
export class ProfissionalConteudoVideoPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private conteudoVideoService: ProfissionalConteudoVideoService,
    private navCtrl: NavController,
    private auth: AngularFireAuth,
    private toastController: ToastController
  ) { }
  //Refernete ao ratebar
  @Input() numStars: number = 5;
  @Input() valor: number = 0;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];
  geral: number;

  //Referente a parte de esconder botões da tela
  public mostraMaisInfo: boolean;
  public mostraFiltro: boolean;

  @ViewChild('form', null) form: NgForm;
  public idConteudoVideo: string;
  public idUsuario: string;

  public todas: ProfissionalConteudoVideo = {
    idUsuario: '',
    tituloVideo: '',
    autorVideo: '',
    linkVideo: '',
    descricaoVideo: '',
    idade: '',
    avaliacao: null,
    createAt: null
  };

  changeFiltro() {
    console.log(this.mostraMaisInfo);
  }

  changeMaisInfo() {
    console.log(this.mostraFiltro);
  }

  //RatebarStar
  calc() {
    this.stars = [];
    let tmp = this.valor;
    for (let i = 0; i < this.numStars; i++ , tmp--) {
      if (tmp >= 1) this.stars.push('star');
      else if (tmp > 0 && tmp < 1) this.stars.push('star-half');
      else this.stars.push('star-outline');
    }
  }

  starClicked(index) {
    this.valor = index + 1;
    this.ionClick.emit(this.valor);
    this.calc();
    this.geral = this.valor;
  }

  ngOnInit() {
    this.calc();
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idConteudoVideo = this.route.snapshot.params['id']; //Pegando o id para uma futura edição

    if (this.idConteudoVideo) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando seus dados, aguarde.'
    });
    await loading.present();

    this.conteudoVideoService.getTodo(this.idConteudoVideo).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando o video cadastrado'
    });
    await loading.present();

    if (this.idConteudoVideo) {
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.todas.avaliacao = this.geral;
      this.conteudoVideoService.updateTodo(this.todas, this.idConteudoVideo).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
      });
    } else {
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.todas.avaliacao = this.geral;
      this.todas.idUsuario = this.idUsuario;
      this.conteudoVideoService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
        this.presentToast(" O video foi cadastrado");
      });
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      position: 'bottom'
    });
    toast.present();
  }
}
