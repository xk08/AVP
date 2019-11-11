import { Component, OnInit, ViewChild } from '@angular/core';
import { AssistenteCadastro } from 'src/app/services/assistenteCadastro/assistenteCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AssistenteCadastroService } from 'src/app/services/assistenteCadastro/assistente-cadastro.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro-assistente',
  templateUrl: './cadastro-assistente.page.html',
  styleUrls: ['./cadastro-assistente.page.scss']
})
export class CadastroAssistentePage implements OnInit {
  @ViewChild('form', null) form: NgForm;

  public idCadastroAssistente: string;
  public idUsuario: string;
  public photo: string = '';

  public listAssistente: AssistenteCadastro[] ;

  public todas: AssistenteCadastro = {
    idUsuario: '',
    apelido: '',
    icone: ''
  };

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private assistenteCadastroService: AssistenteCadastroService,
    private navCtrl: NavController,
    private camera: Camera,
    private overlay: OverlayService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idCadastroAssistente = this.route.snapshot.params['id'];

    if (this.idUsuario) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando ""algoo""...'
    });
    await loading.present();

    this.assistenteCadastroService.getTodos(this.idUsuario).subscribe(res => {
      loading.dismiss();
      this.listAssistente = res;
    });
  }
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando dados cadastrados do assistente...'
    });
    await loading.present();

    if (this.idCadastroAssistente) {
      if (this.photo != '') {
        this.todas.icone = this.photo;
      }
      this.assistenteCadastroService.updateTodo(this.todas, this.idCadastroAssistente).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
      });
    } else {
      if (this.photo != '') {
        this.todas.icone = this.photo;
      }
      this.todas.idUsuario = this.idUsuario;
      this.assistenteCadastroService.addTodo(this.todas, this.idUsuario).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
      });
    }
  }

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
        err => {}
      );
    } catch (error) {
      this.overlay.alert(error);
    }
  }
}
