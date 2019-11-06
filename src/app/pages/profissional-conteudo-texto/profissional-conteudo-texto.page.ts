import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-profissional-conteudo-texto',
  templateUrl: './profissional-conteudo-texto.page.html',
  styleUrls: ['./profissional-conteudo-texto.page.scss']
})
export class ProfissionalConteudoTextoPage implements OnInit {
  //Refernete ao ratebar
  @Input() numStars: number = 5;
  @Input() valor: number = 0;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];
  geral: number;

  //Referente a parte de esconder botões da tela
  public mostraMaisInfo: boolean;
  public mostraFiltro: boolean;

  changeFiltro() {
    console.log(this.mostraMaisInfo);
  }

  changeMaisInfo() {
    console.log(this.mostraFiltro);
  }

  @ViewChild('form', null) form: NgForm;

  public idConteudoTexto: string;
  public idUsuario: string;

  public todas: ProfissionalConteudoTexto = {
    idUsuario: '',
    tituloTexto: '',
    autorTexto: '',
    texto: '',
    maisInfoTexto: '',
    idade: '',
    nivelEmergencia: '',
    avaliacao: null
  };

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private conteudoTextoService: ProfissionalConteudoTextoService,
    private navCtrl: NavController,
    private overlay: OverlayService,
    private auth: AngularFireAuth
  ) {}

  //RatebarStar
  calc() {
    this.stars = [];
    let tmp = this.valor;
    for (let i = 0; i < this.numStars; i++, tmp--) {
      if (tmp >= 1) this.stars.push('star');
      else if (tmp > 0 && tmp < 1) this.stars.push('star-half');
      else this.stars.push('star-outline');
    }
  }

  starClicked(index) {
    this.valor = index + 1;
    this.ionClick.emit(this.valor);
    this.calc();
    this.geral = this.valor;
  }

  ngOnInit() {
    this.calc();
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.idConteudoTexto = this.route.snapshot.params['id']; //Pegando o id para uma futura edição

    if (this.idConteudoTexto) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando seus dados'
    });
    await loading.present();

    this.conteudoTextoService.getTodo(this.idConteudoTexto).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando o texto cadastrado'
    });
    await loading.present();

    //Testando se ja existe, se sim, faz update
    if (this.idConteudoTexto) {
      this.conteudoTextoService.updateTodo(this.todas, this.idConteudoTexto).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
        console.log('esse é o ip :' + this.idConteudoTexto);
      });
    } else {

    // Se não existir, falva no banco
      this.todas.avaliacao = this.geral;
      this.todas.idUsuario = this.idUsuario;
      this.conteudoTextoService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
      });
    }
  }
}
