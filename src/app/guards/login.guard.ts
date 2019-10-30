import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  constructor() {}
  /*
  MECANISMO DESSTIVADO POR ENQUANTO

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) this.navCTRL.navigateRoot('menu/home');

        resolve(!user ? true : false);
      });
    });
  }

  */
}
