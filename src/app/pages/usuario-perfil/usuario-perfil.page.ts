import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { CoreModule } from 'src/app/core/core.module';
import { Network } from '@ionic-native/network/ngx';
import { UsuarioCadastro } from 'src/app/services/usuarioCadastro/usuarioCadastro';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.page.html',
  styleUrls: ['./usuario-perfil.page.scss'],
})
export class UsuarioPerfilPage implements OnInit {

  public idUsuario: string;
  private uidUsuario: string;

  public errorMensagens: any;
  public uidUser: any;
  public formgroup: FormGroup;
  public email: AbstractControl;
  public senha: AbstractControl;


  constructor(
    private usuarioService: UsuarioCadastroService,
    private loadingController: LoadingController, // Substituir depois pelo overlayService (que é genérico)
    private navCtrl: NavController,
    private core: CoreModule,
    public formBuilder: FormBuilder,
    private network: Network,
    private toastController: ToastController,
    private auth: AngularFireAuth,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.uidUsuario = this.authService.getAuth().currentUser.uid
    this.loadTodo(this.uidUsuario);
   
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
      ])],
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      dataNascimento: ['', Validators.compose([
        Validators.required,
      ])],
    });

  }

  async loadTodo(uidUser: string) {
    const loading = await this.loadingController.create({
      message: 'Carregando seus dados, aguarde.'
    });
    await loading.present();

    this.usuarioService.getUsuario(uidUser).subscribe(res => {
      loading.dismiss();
      this.todoUser = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando novas informações'
    });
    await loading.present();

    if (this.idUsuario) {

      this.usuarioService.updateUsuarioTodo(this.todoUser, this.authService.getAuth().currentUser.uid).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('menu/home');
      });
    }

  }
 

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }




  async cadastroProfissional() {
    this.navCtrl.navigateBack('profissional/cadastro');
  }

  //REFERÊNCIA A CLASS USUARIO
  todoUser: UsuarioCadastro = {
    nome: '',
    dataNasc: null,
    foto: '',
    profissao: '',
    email: '',
    senha: '',
    isAdmin: false,
    isProfissional: false
  };

}