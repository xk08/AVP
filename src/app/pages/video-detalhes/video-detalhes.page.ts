import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { ActivatedRoute } from '@angular/router';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-detalhes',
  templateUrl: './video-detalhes.page.html',
  styleUrls: ['./video-detalhes.page.scss'],
})
export class VideoDetalhesPage implements OnInit, OnDestroy {
  public idVideo: string;

  public todas: ProfissionalConteudoVideo[];

  public urlVideoTela: string;
  public descricaoVideoTela: string;
  public tituloVideoTela: string;
  public autorVideoTela: string;

  constructor(
    private route: ActivatedRoute,
    private profissionalVideoService: ProfissionalConteudoVideoService
  ) { }

  public list: Subscription;

  ngOnInit() {
    this.idVideo = this.route.snapshot.params['id'];

    this.list = this.profissionalVideoService.getTodo(this.idVideo).subscribe(res => {
      this.descricaoVideoTela = res.descricaoVideo;
      this.tituloVideoTela = res.tituloVideo;
      this.autorVideoTela = res.autorVideo;
      this.urlVideoTela = res.linkVideo;
    });
  }

  ngOnDestroy() {
    this.list.unsubscribe();
  }
}
