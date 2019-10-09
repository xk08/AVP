import { Component, OnInit } from '@angular/core';
import { EmergenciaCadastroService } from 'src/app/services/emergenciaCadastro/emergencia-cadastro.service';
import { Router } from '@angular/router';
import { EmergenciaCadastro } from 'src/app/services/emergenciaCadastro/emergenciaCadastro';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emergencia-utilizacao',
  templateUrl: './emergencia-utilizacao.page.html',
  styleUrls: ['./emergencia-utilizacao.page.scss']
})
export class EmergenciaUtilizacaoPage implements OnInit {
  constructor(
    private emergenciaCadastroService: EmergenciaCadastroService,
    private router: Router
  ) {}

  public listEmergenciaCadastro = new Array<EmergenciaCadastro>();

  private list: Subscription;

  ngOnInit() {
    //Achar uma forma de pegar só 1 index
    this.list = this.emergenciaCadastroService.getTodos().subscribe(res => {
      this.listEmergenciaCadastro = res;
    });
  }
}
