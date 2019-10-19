import { Component, OnInit } from '@angular/core';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { Router } from '@angular/router';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-emergencia-utilizacao',
  templateUrl: './emergencia-utilizacao.page.html',
  styleUrls: ['./emergencia-utilizacao.page.scss']
})
export class EmergenciaUtilizacaoPage implements OnInit {
  public todoEmergencia: EmergenciaCadastro[];
  public n1: string;
  public n2: string;
  public frase: string;
  public foto: String
  public idEmergencia: string;

  constructor(
    private emergenciaCadastroService: EmergenciaCadastroService,
    private router: Router,
    private auth: AngularFireAuth
  ) {}

  public listEmergenciaCadastro = new Array<EmergenciaCadastro>();

  private list: Subscription;

  ngOnInit() {
    this.idEmergencia = this.auth.auth.currentUser.uid;
    //Achar uma forma de pegar só 1 index
    this.list = this.emergenciaCadastroService.getTodo(this.idEmergencia).subscribe(res => {
      this.n1 = res.primeiroNumero;
      this.n2 = res.segundoNumero;
      this.frase = res.frase;
      this.foto = res.foto;
    });
  }
}
