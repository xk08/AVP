import { Component, OnInit, ViewChild } from '@angular/core';
import { AssistenteCadastro } from 'src/app/services/assistenteCadastro/assistenteCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { AssistenteCadastroService } from 'src/app/services/assistenteCadastro/assistente-cadastro.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { StorageService } from 'src/app/services/storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-assistente',
  templateUrl: './cadastro-assistente.page.html',
  styleUrls: ['./cadastro-assistente.page.scss']
})
export class CadastroAssistentePage implements OnInit {
  @ViewChild('form', null) form: NgForm;
  public idAssistenteCadastro: string;
  public todas: AssistenteCadastro = {
    //os dados que estão sendo mantidos
    apelido: '',
    icone: ''
  };
  private blob: Blob;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private assistenteCadastroService: AssistenteCadastroService,
    private navCtrl: NavController,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.idAssistenteCadastro = this.route.snapshot.params['apelido']; // Why ?
    if (this.idAssistenteCadastro) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando Categoria...'
    });
    await loading.present();

    this.assistenteCadastroService.getTodo(this.idAssistenteCadastro).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando os Dados do Assistente'
    });
    await loading.present();

    if (this.idAssistenteCadastro) {
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.assistenteCadastroService.updateTodo(this.todas, this.idAssistenteCadastro).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
      });
    } else {
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.assistenteCadastroService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
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
        .uploadImagemAssistenteCadastro(this.todas.apelido, this.blob)
        .subscribe(res => {
          this.todas.icone = res;
        });
    } catch (error) {}
  }
}
