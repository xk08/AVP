import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { Router } from '@angular/router';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-emergencia-utilizacao',
  templateUrl: './emergencia-utilizacao.page.html',
  styleUrls: ['./emergencia-utilizacao.page.scss']
})
export class EmergenciaUtilizacaoPage implements OnInit, OnDestroy {
  public todoEmergencia: EmergenciaCadastro[];
  public n1: string;
  public n2: string;
  public nomeN1: string;
  public nomeN2: string;
  public frase: string;
  public foto: string;
  public idEmergencia: string;

  constructor(
    private emergenciaCadastroService: EmergenciaCadastroService,
    private router: Router,
    private auth: AngularFireAuth,
    private navctrl: NavController
  ) {}

  public list: Subscription;

  ngOnInit() {
    this.idEmergencia = this.auth.auth.currentUser.uid;

    this.list = this.emergenciaCadastroService.getTodo(this.idEmergencia).subscribe(res => {
      this.n1 = res.primeiroNumero;
      this.n2 = res.segundoNumero;
      this.frase = res.frase;
      this.foto = res.foto;
      this.nomeN1 = res.nomePrimeiroNumero;
      this.nomeN2 = res.nomeSegundoNumero;
    });
  }

  mandaPraTelaCadastroEmergencia() {
    this.navctrl.navigateForward('/emergencia/emergencia-cadastro');
    this.list;
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
