import { Component, ViewChild } from '@angular/core';
import { User } from 'src/app/services/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AssistenteCadastroService } from 'src/app/services/assistenteCadastro/assistente-cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  user: User = new User();
  @ViewChild('form', null) form: NgForm;

  constructor(
    public router: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private network: Network,
    private usuarioCadastro: UsuarioCadastroService,
    private assistenteCadastro: AssistenteCadastroService,
    private auth: AngularFireAuth
  ) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast('NetWork Desconectada! :-(');
    });
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  createAccount() {
    this.router.navigate(['usuario/cadastro']);
  }

  signIn() {
    // achar aqui uma maneira de redirecinar
    if (this.form.form.valid) {
      this.authService
        .signIn(this.user)
        .then(() => {
          this.usuarioCadastro.getUsuario(this.auth.auth.currentUser.uid).subscribe( res => {
            if(!res.isProfissional){
              this.router.navigate(['profissional-conteudo']); //Direciona após logado
            }else{
              this.router.navigate(['menu/home']); //Direciona após logad
            }
          });
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            this.presentToast('E-mail invalido');
          } else if (error.code == 'auth/user-disabled') {
            this.presentToast('Usuario desativado');
          } else if (error.code == 'auth/user-not-found') {
            this.presentToast('Usuario não encontrado');
          } else if (error.code == 'auth/wrong-password') {
            this.presentToast('Senha invalida');
          }
        });
    }
  }
}
