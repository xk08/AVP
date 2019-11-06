import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ActivatedRoute } from '@angular/router';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imagem-detalhes',
  templateUrl: './imagem-detalhes.page.html',
  styleUrls: ['./imagem-detalhes.page.scss'],
})
export class ImagemDetalhesPage implements OnInit, OnDestroy {
  public idImagem: string;

  public todas: ProfissionalConteudoImagem[];

  //Variaveis que serão exibidas na view
  public imagemTela: string;
  public maisInfoImagemTela: string;
  public tituloImagemTela: string;
  public autorImagemTela: string;



  constructor(
    private route: ActivatedRoute,
    private profissionalImagemService: ProfissionalConteudoImagemService
  ) { }

  public list: Subscription;

  ngOnInit() {
    this.idImagem = this.route.snapshot.params['id'];


    this.list = this.profissionalImagemService.getTodo(this.idImagem).subscribe(res => {
      this.maisInfoImagemTela = res.maisInfoImagem;
      this.tituloImagemTela = res.tituloImagem;
      this.autorImagemTela = res.autorImagem;
      this.imagemTela = res.imagem;
    });
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
