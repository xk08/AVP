import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss']
})
export class EmergenciaPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  emergenciaUSelected() {
    console.log('Funcionado até aqui');
  }

  emergenciaCSelected() {
    console.log('Funcionado até aqui');
  }
}
