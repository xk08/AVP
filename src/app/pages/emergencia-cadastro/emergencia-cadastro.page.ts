import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-emergencia-cadastro',
  templateUrl: './emergencia-cadastro.page.html',
  styleUrls: ['./emergencia-cadastro.page.scss']
})
export class EmergenciaCadastroPage implements OnInit {
  @ViewChild('form', null) form: NgForm;
  public idEmergenciaCadastro: string;
  public todas: EmergenciaCadastro = {
    //os dados que estão sendo mantidos
    idAlternativo: '',
    foto: '',
    primeiroNumero: '',
    segundoNumero: '',
    frase: ''
  };
  private blob: Blob;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private emergenciaCadastroService: EmergenciaCadastroService,
    private navCtrl: NavController,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.idEmergenciaCadastro = this.route.snapshot.params['idAlternativo']; // Why ?
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
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    } else {
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.emergenciaCadastroService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    }
  }

  async abrirGaleria() {
    const opcao: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };

    try {
      const fileUrl: string = await this.camera.getPicture(opcao);

      let file: string;

      if (this.platform.is('ios')) {
        //IOS RETORNA IMG_23456789.jpg
        file = fileUrl.split('/').pop();
      } else {
        //ANDROID RETORNA IMG_23456.jpg?23456789 SENDO ASSIM O TRATAMENTO É DIFERENTE
        file = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.indexOf('?'));
      }

      const path: string = fileUrl.substring(0, fileUrl.lastIndexOf('/'));

      //LE A IMAGEM COMO UM ARQUIVO BINÁRIO
      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
      this.blob = new Blob([buffer], { type: 'image/jpg' });
      this.storageService
        .uploadImagemEmergenciaCadastro(this.todas.idAlternativo, this.blob)
        .subscribe(res => {
          this.todas.foto = res;
        });
    } catch (error) {}
  }
}
