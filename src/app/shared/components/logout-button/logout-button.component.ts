import { NavController, MenuController } from '@ionic/angular';
import { OnInit, Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OverlayService } from 'src/app/core/overlay.service';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
})
export class LogoutButtonComponent implements OnInit {
  @Input() menuId: string; // Vai receber um valor do menu que será utilizado (AQUI MANDA OS OUTROS TIPO DE MENU DE ACORDO COM O USUÁRIO ??)

  constructor(
    private authService: AuthService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.menuCtrl.isEnabled(this.menuId))) {
      //Checka se o menu esta habilitado
      this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
    }
  }

  async logout(): Promise<void> {
    await this.overlayService.alert({
      //Apresenta a mensagem
      message: 'Deseja mesmo sair ?',
      buttons: [
        {
          text: 'Sim', //caso sim
          handler: async () => {
            await this.authService.signOut(); // chama o método de deslogar criado
            /* AULA 95 ->
            Se usário estiver deslogado, desabilita o login
            #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
            */
            await this.menuCtrl.enable(false, this.menuId);
            // this.navCtrl.navigateRoot('login'); // Finaliza as paginas e dieciona pro login
          }
        },
        'Não' // Não faz nada e segue a execução
      ]
    });
  }
}
