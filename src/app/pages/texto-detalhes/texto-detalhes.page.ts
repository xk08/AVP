import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';

@Component({
  selector: 'app-texto-detalhes',
  templateUrl: './texto-detalhes.page.html',
  styleUrls: ['./texto-detalhes.page.scss']
})
export class TextoDetalhesPage implements OnInit {
  public idTexto: string;

  public todas: ProfissionalConteudoTexto = {
    //os dados que estão sendo mantidos
    idUsuario: '',
    autorTexto: '',
    avaliacao: 0,
    id: '',
    maisInfoTexto: '',
    idade: '',
    nivelEmergencia: '',
    texto: '',
    tituloTexto: ''
  };

  constructor(
    private route: ActivatedRoute,
    private profissionalTextoService: ProfissionalConteudoTextoService
  ) {}

  ngOnInit() {
    this.idTexto = this.route.snapshot.params['id'];
    this.loadTodo();
    console.log('On init -> ' + this.idTexto);
  }

  async loadTodo() {
    this.profissionalTextoService.getTodo(this.idTexto).subscribe(res => {
      this.todas = res;
      console.log('On Metodo  -> ' + this.idTexto);
    });
  }
}
