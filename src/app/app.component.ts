import { Component } from '@angular/core';
import { Inicio } from './constants/constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puertas_experimento_social';
  titulo: string = Inicio.TITULO_APP;
}
