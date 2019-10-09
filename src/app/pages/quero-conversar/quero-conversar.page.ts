import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueroConversar } from 'src/app/services/queroConversar/queroConversar';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { QueroConversarService } from 'src/app/services/queroConversar/quero-conversar.service';
import { OverlayService } from 'src/app/core/overlay.service';

@Component({
  selector: 'app-quero-conversar',
  templateUrl: './quero-conversar.page.html',
  styleUrls: ['./quero-conversar.page.scss']
})
export class QueroConversarPage implements OnInit {
  @ViewChild('form', null) form: NgForm;
  public todas: QueroConversar = {
    id: '',
    textoLivre: '',
    avaliacao: ''
  };

  private idQueroConversar: string;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private queroConversarService: QueroConversarService,
    private navCtrl: NavController,
    private overlay: OverlayService
  ) {}

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    // do your stuff
  }

  ngOnInit() {
    this.idQueroConversar = this.route.snapshot.params['id'];

    if (this.idQueroConversar) {
      this.loadTodo();
    }
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
      this.queroConversarService.updateTodo(this.todas, this.idQueroConversar).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
      });
    } else {
      this.queroConversarService.addTodo(this.todas).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('/menu/home');
      });
    }
  }
}
