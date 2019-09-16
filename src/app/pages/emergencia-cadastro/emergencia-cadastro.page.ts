import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-emergencia-cadastro',
  templateUrl: './emergencia-cadastro.page.html',
  styleUrls: ['./emergencia-cadastro.page.scss']
})
export class EmergenciaCadastroPage implements OnInit {
  @ViewChild('form', null) form: NgForm;
  public idEmergenciaCadastro: string;
  public todas: EmergenciaCadastro = {
    //os dados que estão sendo mantidos
    idAlternativo: '',
    foto: '',
    primeiroNumero: '',
    segundoNumero: '',
    frase: ''
  };
  private blob: Blob;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private emergenciaCadastroService: EmergenciaCadastroService,
    private navCtrl: NavController,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.idEmergenciaCadastro = this.route.snapshot.params['idAlternativo']; // Why ?
    if (this.idEmergenciaCadastro) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando ""algoo""...'
    });
    await loading.present();

    this.emergenciaCadastroService.getTodo(this.idEmergenciaCadastro).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando os Dados do mecanismo de S.O.S'
    });
    await loading.present();

    if (this.idEmergenciaCadastro) {
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    } else {
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.emergenciaCadastroService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
        console.log('Até aqui ta indo, salvo com sucesso');
      });
    }
  }

  async abrirGaleria() {
   
  }
}
