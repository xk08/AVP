import { Component, OnInit, OnDestroy } from "@angular/core";
import { EmergenciaCadastroService } from "src/app/services/emergenciaCadastro/emergencia-cadastro.service";
import { Router } from "@angular/router";
import { EmergenciaCadastro } from "src/app/services/emergenciaCadastro/emergenciaCadastro";
import { Subscription } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController } from "@ionic/angular";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: "app-emergencia-utilizacao",
  templateUrl: "./emergencia-utilizacao.page.html",
  styleUrls: ["./emergencia-utilizacao.page.scss"]
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
  public temDados: boolean ;

  public n1publico: string;
  public n2publico: string;
  public n3cvv: string;

  constructor(
    private emergenciaCadastroService: EmergenciaCadastroService,
    private router: Router,
    private auth: AngularFireAuth,
    private navctrl: NavController,
    private callNumber: CallNumber,
    private sms: SMS, //Voltar nessa parte
    private androidPermissions: AndroidPermissions
  
  ) {
  
  }

  public list: Subscription;
  
  ngOnInit() {

    this.idEmergencia = this.auth.auth.currentUser.uid ; 
  
    this.list = this.emergenciaCadastroService
    .getTodo(this.idEmergencia)
    .subscribe(res => {
      this.n1 = res.primeiroNumero;
      this.n2 = res.segundoNumero;
      this.frase = res.frase;
      this.foto = res.foto;
      this.nomeN1 = res.nomePrimeiroNumero;
      this.nomeN2 = res.nomeSegundoNumero;

      this.n1publico = this.n1;
      this.n2publico = this.n2;
      this.n3cvv = "188";

    });
  }

  //Mecanismo de ligação
  callN1() {
    this.callNumber
      .callNumber(this.n1publico, true)
      .then(res => console.log("Ligando para " + this.n1publico, res))
      .catch(err => console.log("Falhou", err));
  }

  callN2() {
    this.callNumber
      .callNumber(this.n2publico, true)
      .then(res => console.log("Ligando para " + this.n2publico, res))
      .catch(err => console.log("Falhou", err));
  }

  callN3() {
    this.callNumber
      .callNumber(this.n3cvv, true)
      .then(res => console.log("Ligando para " + this.n3cvv, res))
      .catch(err => console.log("Falhou", err));
  }

  /*
  teste() {
    var options: {
      replaceLineBreaks: true;
      android: {
        intent: "INTENT";
      };
    };
    this.sms
      .send(this.n1publico, "Marcos está em perigo, ligue agora mesmo", options)
      .then(() => {
        console.log("sms funcionou");
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
  }
  */
  mandaPraTelaCadastroEmergencia() {
    this.navctrl.navigateForward("/emergencia/emergencia-cadastro");
    this.list;
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
