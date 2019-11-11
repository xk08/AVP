import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueroConversar } from 'src/app/services/queroConversar/queroConversar';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { QueroConversarService } from 'src/app/services/queroConversar/quero-conversar.service';
import { OverlayService } from 'src/app/core/overlay.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';

@Component({
  selector: 'app-quero-conversar',
  templateUrl: './quero-conversar.page.html',
  styleUrls: ['./quero-conversar.page.scss']
})
export class QueroConversarPage implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.list.unsubscribe();
  }
  //Dados do usuario
  public nomeUsuarioLogado: String;
  public list: Subscription;

  public idUsuario: string;

  //Refernete ao ratebar
  @Input() numStars: number = 5;
  @Input() valor: number = 0;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];
  geral: number;

  @ViewChild('form', null) form: NgForm;

  public todas: QueroConversar = {
    id: '',
    idUsuario: '',
    avaliacao: 0
  };

  private idQueroConversar: string;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private queroConversarService: QueroConversarService,
    private navCtrl: NavController,
    private overlay: OverlayService,
    private auth: AngularFireAuth,
    private usuarioCadastroService: UsuarioCadastroService
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
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.calc();
    this.idQueroConversar = this.route.snapshot.params['id'];

    if (this.idQueroConversar) {
      this.loadTodo();
    }

    //Pegando dados do Usuário para exibir na tela
    this.list = this.usuarioCadastroService
      .getUsuario(this.auth.auth.currentUser.uid)
      .subscribe(res => {
        this.nomeUsuarioLogado = res.nome;
      });
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando Dados Informados...'
    });
    await loading.present();

    this.queroConversarService.getTodo(this.idQueroConversar).subscribe(res => {
      loading.dismiss();
      this.todas = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando dados que foram informados'
    });
    await loading.present();

    if (this.idQueroConversar) {
      this.todas.avaliacao = this.geral;
      this.queroConversarService.updateTodo(this.todas, this.idQueroConversar).then(() => {
        loading.dismiss();
        // this.navCtrl.navigateBack('/menu/home');
      });
    } else {
      this.todas.avaliacao = this.geral;
      this.todas.idUsuario = this.idUsuario;
      this.queroConversarService.addTodo(this.todas, this.idUsuario).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('profissional-conteudo-especifico');
      });
    }
  }
}
