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

  @ViewChild('form', null) form: NgForm;
  public idConteudoTexto: string;
  public idUsuario: string;

  public todas: ProfissionalConteudoTexto = {
    id: '',
    idUsuario: '',
    tituloTexto: '',
    autorTexto: '',
    texto: '',
    maisInfoTexto: '',
    idade: '',
    nivelEmergencia: '',
    avaliacao: 0
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

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    // do your stuff
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
      message: 'Carregando seus dados, aguarde.'
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

    if (this.idConteudoTexto) {
      /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
      this.todas.avaliacao = this.geral;
      this.conteudoTextoService.updateTodo(this.todas, this.idConteudoTexto).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('menu/home');
      });
    } else {
      /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
      this.todas.avaliacao = this.geral;
      this.conteudoTextoService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateForward('menu/home');
      });
    }
  }
}
