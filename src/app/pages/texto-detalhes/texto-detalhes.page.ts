import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-texto-detalhes',
  templateUrl: './texto-detalhes.page.html',
  styleUrls: ['./texto-detalhes.page.scss']
})
export class TextoDetalhesPage implements OnInit, OnDestroy {
  public idTexto: string;

  public todas: ProfissionalConteudoTexto [] ;

  public textoTela: string;
  public maisInfoTela: string;
  public tituloTela: string;
  public autorTextoTela: string;



  constructor(
    private route: ActivatedRoute,
    private profissionalTextoService: ProfissionalConteudoTextoService
  ) {}

  public list: Subscription;

  ngOnInit() {
    this.idTexto = this.route.snapshot.params['id'];

    
    this.list = this.profissionalTextoService.getTodo(this.idTexto).subscribe(res => {
      this.maisInfoTela = res.maisInfoTexto;
      this.tituloTela = res.tituloTexto;
      this.autorTextoTela = res.autorTexto;
      this.textoTela = res.texto;
    });
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
