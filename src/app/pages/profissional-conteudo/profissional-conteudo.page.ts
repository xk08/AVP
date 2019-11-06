import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfissionalConteudoTexto } from 'src/app/services/profissionalConteudoTexto/profissionalConteudoTexto';
import { ProfissionalConteudoTextoService } from 'src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ProfissionalConteudoImagem } from 'src/app/services/profissionalConteudoImagem/profissionalConteudoImagem';
import { ProfissionalConteudoVideo } from 'src/app/services/profissionalConteudoVideo/profissionalConteudoVideo';
import { ProfissionalConteudoImagemService } from 'src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service';
import { ProfissionalConteudoVideoService } from 'src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service';

@Component({
  selector: 'app-profissional-conteudo',
  templateUrl: './profissional-conteudo.page.html',
  styleUrls: ['./profissional-conteudo.page.scss']
})
export class ProfissionalConteudoPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  profissionalConteudoTexto() {}

  profissionalConteudoImagem() {}

  profissionalConteudoVideo() {}

  //Referente a API do google
}
