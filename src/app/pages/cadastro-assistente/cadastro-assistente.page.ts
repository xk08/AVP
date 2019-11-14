import { Component, OnInit, ViewChild } from '@angular/core';
import { AssistenteCadastro } from 'src/app/services/assistenteCadastro/assistenteCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AssistenteCadastroService } from 'src/app/services/assistenteCadastro/assistente-cadastro.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Network } from '@ionic-native/network/ngx';
import { CoreModule } from 'src/app/core/core.module';

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

  public formgroup: FormGroup;
  public errorMensagens: any;

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
    private camera: Camera,
    private overlay: OverlayService,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private network: Network,
    private core: CoreModule,
    private toastController: ToastController
  ) {}


  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idCadastroAssistente = this.route.snapshot.params['id'];

    this.errorMensagens = this.core.identForm;

    this.formgroup = this.formBuilder.group({
      assistente: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ])]
    });

    if (this.idUsuario) {
      this.loadTodo();
    }
    this.networkConnect();
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
  async networkConnect() {
    const loading = await this.loadingController.create({
      message: 'Conectando com a Internet...'
    })
    this.network.onDisconnect().subscribe(() => {
      loading.dismiss();
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
        this.presentToast("Assistente '" + this.todas.apelido + "' cadastrado");
      });
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
