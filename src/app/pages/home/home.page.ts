import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioCadastroService } from 'src/app/services/usuarioCadastro/usuario-cadastro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  private idUsuario: string;
  public admin: boolean;
  private subscription: Subscription;
  constructor(private navctrl: NavController,
              private auth: AngularFireAuth,
              private usuarioCadastro: UsuarioCadastroService) {}

  ngOnInit() {
    this.idUsuario = this.auth.auth.currentUser.uid;
    this.subscription = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe( res => {
      this.admin = res.isProfissional;
    });
  }

  // REfrente ao profissional
  profissionalConteudoTexto() {}

  profissionalConteudoImagem() {}

  profissionalConteudoVideo() {}


  direcionaPraTela() {
    this.navctrl.navigateForward('quero-conversar');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
