import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage/storage';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private afs: AngularFireStorage, private alertController: AlertController) {
    //Mudar para o genérico
  }

  async presentAlert(msg) {
    //Mudar para o genérico

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  uploadImagemUsuario(uidUsuarioCadastro: string, photo: string) {
    const ref = this.afs.ref('UsuarioCadastro/' + uidUsuarioCadastro);
    ref.putString(photo, 'data_url');
    return ref.getDownloadURL();
  }

  //Ver se esse aqui ta funcionando
  uploadImagemAssistenteCadastro(idCategoria: string, blob: Blob) {
    const ref = this.afs.ref('AssistenteCadastro/' + idCategoria + '.jpg');
    const task = ref.put(blob);
    return ref.getDownloadURL();
  }
  uploadImagemEmergenciaCadastro(idEmergenciaCadastro: string, blob: Blob) {
    const ref = this.afs.ref('EmergenciaCadastro/' + idEmergenciaCadastro + '.jpg');
    const task = ref.put(blob);
    return ref.getDownloadURL();
  }
}
