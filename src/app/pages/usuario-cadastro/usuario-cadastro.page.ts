import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UsuarioCadastro } from 'src/app/services/usuarioCadastro/usuarioCadastro';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { CoreModule } from 'src/app/core/core.module';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss']
})
export class UsuarioCadastroPage implements OnInit {

  public errorMensagens: any;
  public uidUser: any;
  public formgroup: FormGroup;
  public email: AbstractControl;
  public senha: AbstractControl;


  constructor(
    private afAuth: AngularFireAuth,
    private usuarioService: UsuarioCadastroService,
    private loadingController: LoadingController, // Substituir depois pelo overlayService (que é genérico)
    private navCtrl: NavController,
    private core: CoreModule,
    public formBuilder: FormBuilder,
    private network: Network,
    private toastController : ToastController
  ) { }

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
    this.networkConnect();
  }

  async networkConnect() {
    const loading = await this.loadingController.create({
      message: 'Conectando com a Internet...'
    });
    this.network.onDisconnect().subscribe(() => {
      loading.dismiss();
    });
  }

  //FUNÇÃO PARA CADASTRAR NOVO USUARIO
  async concluiCadastro() {
    const loading = await this.loadingController.create({
      //Trocar pelo overlay
      message: 'Salvando dados...'
    });

    //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
    this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(() => {
      loading.dismiss();
      this.navCtrl.navigateBack('login');
      this.presentToast('Parabéns, ' + this.todoUser.nome + ' \n Você foi cadastrado (a) com sucesso.');
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