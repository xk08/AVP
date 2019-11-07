import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { UsuarioCadastro } from 'src/app/services/usuarioCadastro/usuarioCadastro';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss']
})
export class UsuarioCadastroPage implements OnInit {
  public uidUser: any;

  @ViewChild('form', null) form: NgForm;

  constructor(
    private afAuth: AngularFireAuth,
    private usuarioService: UsuarioCadastroService,
    private loadingController: LoadingController, // Substituir depois pelo overlayService (que é genérico)
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  //FUNÇÃO PARA CADASTRAR NOVO USUARIO
  async concluiCadastro() {
    const loading = await this.loadingController.create({
      //Trocar pelo overlay
      message: 'Salvando dados...'
    });

    //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
    this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(() => {
      loading.dismiss();
    });

    //APÓS DADOS CADASTRADOS, ENVIA O USUARIO PARA O INICIO DA APLICAÇÃO
    this.navCtrl.navigateBack('login');
  }

  async cadastroProfissional() {
    this.navCtrl.navigateBack('profissional/cadastro');
  }

  //REFERÊNCIA A CLASS USUARIO
  todoUser: UsuarioCadastro = {
    nome: '',
    dataNasc: 0 ,
    foto: '',
    profissao: '',
    codigoProfissao: '',
    isAtivo: true,
    email: '',
    senha: '',
    isAdmin: false,
    isProfissional: false
  };
}
