/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  /* Usando HTML inline, não necessitdando de arquivos externos */
  template: `
    <ion-buttons>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-buttons>
  `
})
export class MenuToggleComponent {
  @Input() menu: string;
}
