import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profissional-conteudo-imagem',
  templateUrl: './profissional-conteudo-imagem.page.html',
  styleUrls: ['./profissional-conteudo-imagem.page.scss']
})
export class ProfissionalConteudoImagemPage implements OnInit {
  //Refernete ao ratebar
  @Input() numStars: number = 5;
  @Input() valor: number = 0;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];
  geral: number;

  public photo: string = '';

  //Referente a parte de esconder botões da tela
  public mostraMaisInfo: boolean;
  public mostraFiltro: boolean;

  changeFiltro() {
    console.log(this.mostraMaisInfo);
  }

  changeMaisInfo() {
    console.log(this.mostraFiltro);
  }

  @ViewChild('form', null) form: NgForm;
  public idConteudoImagem: string;
  public idUsuario: string;

  public todas: ProfissionalConteudoImagem = {
    idUsuario: '',
    idade: '',
    avaliacao: null,
    tituloImagem: '',
    autorImagem: '',
    imagem: '',
    maisInfoImagem: ''
  };

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private conteudoImagemService: ProfissionalConteudoImagemService,
    private navCtrl: NavController,
    private overlay: OverlayService,
    private auth: AngularFireAuth,
    private camera: Camera
  ) {}

  //Referente a camera e salvar as imagens

  async abrirGaleria() {
    const opcao: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      correctOrientation: true
    };

    try {
      this.camera.getPicture(opcao).then(
        imageData => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.photo = base64Image;
        },
        err => {
          // Handle error
        }
      );
    } catch (error) {
      this.overlay.alert(error);
    }
  }

  //RatebarStar
  calc() {
    this.stars = [];
    let tmp = this.valor;
    for (let i = 0; i < this.numStars; i++, tmp--) {
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

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    // do your stuff
  }

  ngOnInit() {
    this.calc();
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idConteudoImagem = this.route.snapshot.params['id']; //Pegando o id para uma futura edição

    if (this.idConteudoImagem) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando seus dados, aguarde.'
    });
    await loading.present();

    this.conteudoImagemService.getTodo(this.idConteudoImagem).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando a imagem cadastrado'
    });
    await loading.present();

    if (this.idConteudoImagem) {
      if (this.photo != '') {
        this.todas.imagem = this.photo;
      }
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.todas.avaliacao = this.geral;
      this.conteudoImagemService.updateTodo(this.todas, this.idConteudoImagem).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
      });
    } else {
      if (this.photo != '') {
        this.todas.imagem = this.photo;
      }
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.todas.avaliacao = this.geral;
      this.todas.idUsuario = this.idUsuario;
      this.conteudoImagemService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
      });
    }
  }
}
