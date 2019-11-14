import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { LoadingController, NavController } from '@ionic/angular';
import { UsuarioCadastro } from 'src/app/services/usuarioCadastro/usuarioCadastro';
import { Network } from '@ionic-native/network/ngx';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-profissional-cadastro',
  templateUrl: './profissional-cadastro.page.html',
  styleUrls: ['./profissional-cadastro.page.scss']
})
export class ProfissionalCadastroPage implements OnInit {
  public uidUser: any;
  public formgroup: FormGroup;
  public email: AbstractControl;
  public senha: AbstractControl ;
  public errorMensagens: any;

  constructor(
    private afAuth: AngularFireAuth,
    private usuarioService: UsuarioCadastroService,
    private loadingController: LoadingController, // Substituir depois pelo overlayService (que é genérico)
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private network: Network,
    private core: CoreModule
  ) {}

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
      profissao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
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
    })
    .catch((error:any) => {
      this.core.identificaError(error.code);
    })
  }


  //REFERÊNCIA A CLASS USUARIO
  todoUser: UsuarioCadastro = {
    nome: '',
    dataNasc: 0,
    foto: '',
    profissao: '',
    email: '',
    senha: '',
    isAdmin: false,
    isProfissional: true
  };
}

