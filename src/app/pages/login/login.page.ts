import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit{
  user: User = new User();

  public formgroup: FormGroup;
  public errorMensagens: any;

  @ViewChild('form', null) form: NgForm;

  public buttonColor: string = '#000';

  constructor(
    public router: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private network: Network,
    private usuarioCadastro: UsuarioCadastroService,
    private auth: AngularFireAuth,
    private loadingController: LoadingController,
    private core: CoreModule,
    public formBuilder: FormBuilder,
  ) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast('Sem Internet no Momento');
    });
  }

  ngOnInit() {
    this.errorMensagens = this.core.identForm;

    this.formgroup = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    });

    this.networkConnect();

  }

  async networkConnect() {
    const loading = await this.loadingController.create({
      message: 'Conectando com a Internet...'
    })
    this.network.onDisconnect().subscribe(() => {
      loading.dismiss();
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


createAccount() {
  this.router.navigate(['usuario/cadastro']);
}

signIn() {
  // achar aqui uma maneira de redirecinar

    this.authService
      .signIn(this.user)
      .then(() => {
        this.usuarioCadastro.getUsuario(this.auth.auth.currentUser.uid).subscribe(res => {
          if (res.isProfissional) {
            this.router.navigate(['/menu/profissional-todos-conteudos']); //Direciona após logado
          } else {
            this.router.navigate(['menu/home']); //Direciona após logad
          }
        });
      })

      .catch((error: any) => {
        //IDENTIFICA O ERRO CORRESPONDENTE
        this.core.identificaError(error.code);
  })
}
}

