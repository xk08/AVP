import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}

  direcionaPraTela() {
    this.navctrl.navigateForward('quero-conversar');
  }
}
