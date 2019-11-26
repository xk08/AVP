import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { CoreModule } from 'src/app/core/core.module';
import { Network } from '@ionic-native/network/ngx';
import { UsuarioCadastro } from 'src/app/services/usuarioCadastro/usuarioCadastro';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.page.html',
  styleUrls: ['./usuario-perfil.page.scss'],
})
export class UsuarioPerfilPage implements OnInit {

  public idUsuario: string;

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
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;

    if (this.idUsuario) {
      this.loadTodo();
    }

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

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando seus dados, aguarde.'
    });
    await loading.present();

    this.usuarioService.getUsuario(this.idUsuario).subscribe(res => {
      loading.dismiss();
      this.todoUser = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando as novas informações'
    });
    await loading.present();

    if (this.idUsuario) {

      this.usuarioService.updateUsuarioTodo(this.todoUser, this.idUsuario).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('menu/home');
      });
    }

  }

  //FUNÇÃO PARA CADASTRAR NOVO USUARIO
  async concluiCadastro() {
    const loading = await this.loadingController.create({
      //Trocar pelo overlay
      message: 'Salvando suas informações...'
    });

    //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
    this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(() => {
      loading.dismiss();
      this.navCtrl.navigateBack('menu/home');
      this.presentToast('Usuário, ' + this.todoUser.nome + ' \n atualizado(a) com sucesso.');
    })
      .catch((error: any) => {
        this.core.identificaError(error.code);
      });
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