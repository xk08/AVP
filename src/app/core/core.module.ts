import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, ToastController, AlertController } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

import { environment } from "src/environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage/public_api";

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { Network } from "@ionic-native/network/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from "@ionic-native/sms/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    //Essa parte é referente a salvar os dados offline
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true
    }),
    BrMaskerModule
  ],
  exports: [BrowserModule, IonicModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    Network,
    LocalNotifications,
    CallNumber,
    SMS,
    AndroidPermissions,
    BrMaskerModule
  ]
})
export class CoreModule {

  public identForm = {
    'email': [
      { type: 'requerid', mensagem: 'E-mail não informado' },
      { type: 'minlength', mensagem: 'Minimo 6 caracteres' },
      { type: 'maxLength', mensagem: 'Maximo 30 caracteres' },
      { type: 'pattern', mensagem: 'Endereço inválido!' }
    ],
    'senha': [
      { type: 'requerid', mensagem: 'Senha não informada' },
      { type: 'minlength', mensagem: 'Minimo 6 caracteres' },
      { type: 'maxLength', mensagem: 'Maximo 30 caracteres' },
      { type: 'pattern', mensagem: 'Senha invalido!' }
    ],
    'nome': [
      { type: 'requerid', mensagem: 'Nome não informado' },
      { type: 'minlength', mensagem: 'Minimo 3 letras' },
      { type: 'maxLength', mensagem: 'Maximo 50 caracteres' },
     // { type: 'pattern', mensagem: 'Nome informado inválido' }
    ],
    'dataNascimento': [
      { type: 'requerid', mensagem: 'Data não informada' },
    //  { type: 'minlength', mensagem: 'Minimo 3 letras' },
      //{ type: 'maxLength', mensagem: 'Maximo 50 caracteres' },
      //{ type: 'pattern', mensagem: 'Nome informado inválido' }
    ],
    'profissao': [
      { type: 'requerid', mensagem: 'Profissão não informada' },
      { type: 'minlength', mensagem: 'Minimo 6 letras' },
      { type: 'maxLength', mensagem: 'Maximo 30 caracteres' },
      //{ type: 'pattern', mensagem: 'Nome informado inválido' }
    ]
  }


  constructor(public alertController: AlertController,
    public toastController: ToastController) {
  }

  // ALERTAS
  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      subHeader: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  identificaError(error: any) {
    switch (error) {
      case 'auth/email-already-in-use':
        this.presentAlert('Atenção', 'O e-mail escolhido, já está sendo utilizado por alguém.');
        break;

      case 'auth/invalid-email':
        this.presentAlert('Atenção', 'Endereço de e-mail inválido!');
        break;

      case 'auth/operation-not-allowed':
        this.presentAlert('Atenção', 'E-mail e senha desativadas!');
        break;
      case 'auth/weak-password':
        this.presentAlert('Atenção', 'Senha muito fraca!');
        break;

      case 'auth/invalid-email':
        this.presentAlert('Atenção', 'E-mail invalido!');
        break;

      case 'auth/user-disabled':
        this.presentAlert('Atenção', 'Usuario desativado!');
        break;

      case 'auth/user-not-found':
        this.presentAlert('Atenção', 'Usuario não encontrado!');
        break;

      case 'auth/wrong-password':
        this.presentAlert('Atenção', 'Senha inválida!');
        break;

      default:
        this.presentAlert('Atenção', 'Erro não encontrado em nosso Banco!');
        break;
    }
  }
}
