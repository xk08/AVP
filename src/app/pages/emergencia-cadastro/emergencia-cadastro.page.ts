import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-emergencia-cadastro',
  templateUrl: './emergencia-cadastro.page.html',
  styleUrls: ['./emergencia-cadastro.page.scss']
})
export class EmergenciaCadastroPage implements OnInit {
  @ViewChild('form', null) form: NgForm;
  public idEmergenciaCadastro: string;
  public idUsuario: string ; 
  public todas: EmergenciaCadastro = {
    //os dados que estão sendo mantidos
    idUsuario: '',
    foto: '',
    primeiroNumero: '',
    segundoNumero: '',
    frase: ''
  };
  private blob: Blob;
  public photo: string = '';

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private emergenciaCadastroService: EmergenciaCadastroService,
    private navCtrl: NavController,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private storageService: StorageService,
    private overlay: OverlayService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idEmergenciaCadastro = this.route.snapshot.params['id'];
    if (this.idEmergenciaCadastro) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando ""algoo""...'
    });
    await loading.present();

    this.emergenciaCadastroService.getTodo(this.idEmergenciaCadastro).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando os Dados do mecanismo de S.O.S'
    });
    await loading.present();

    if (this.idEmergenciaCadastro) {
      if (this.photo != '') {
        this.todas.foto = this.photo;
      }
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    } else {
      if (this.photo != '') {
        this.todas.foto = this.photo;
      }
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.emergenciaCadastroService.addTodo(this.todas, this.idUsuario).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    }
  }

  async abrirGaleria() {
    const opcao: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      //mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      correctOrientation: true
    };

    try {
      this.camera.getPicture(opcao).then(
        imageData => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
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
}
