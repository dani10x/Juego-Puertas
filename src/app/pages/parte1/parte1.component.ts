import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbTrigger } from '@nebular/theme';
import { Juego1 } from 'src/app/constants/constantes';
import { InfoJuegoService } from 'src/app/services/info-juego.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css']
})
export class Parte1Component implements OnInit {

  titulo: String = Juego1.TITULO;
  valores: number[] = Juego1.VALORES;
  puertash: number = Juego1.PUERTAS_HEIGHT;
  puertasw: number = Juego1.PUERTAS_WIDHT;
  click = NbTrigger.FOCUS;
  count: number = 0;
  dineroString: String = '$0';
  dinero: number = 0;
  puerta1: number = 0;
  puerta1String: String = '';
  puerta2: number = 0;
  puerta2String: String = '';
  puerta3: number = 0;
  puerta3String: String = '';

  constructor(private router: Router,
    private infoJuegoService: InfoJuegoService) { }

  ngOnInit(): void {
    if (this.infoJuegoService.getNombreJugador() === '') {
      this.router.navigateByUrl('');
    }
    this.valores = this.valores.sort(function () { return Math.random() - 0.5 });
    this.puerta1 = this.valores.pop() || 0;
    this.puerta2 = this.valores.pop() || 0;
    this.puerta3 = this.valores.pop() || 0;
    this.count = Juego1.INTENTOS;
    this.puerta1String = this.numeroToCurrency(this.puerta1);
    this.puerta2String = this.numeroToCurrency(this.puerta2);
    this.puerta3String = this.numeroToCurrency(this.puerta3);
  }

  public add(puerta: number): void {
    if (this.count === 0) {
      return;
    }
    this.count--;
    switch (puerta) {
      case 1: this.addDinero(this.puerta1); break;
      case 2: this.addDinero(this.puerta2); break;
      case 3: this.addDinero(this.puerta3); break;
    }
  }

  private addDinero(cantidad: number): void {
    this.dinero += cantidad;
    this.dineroString = this.numeroToCurrency(this.dinero);
  }

  private numeroToCurrency(numero: number): String {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

    return formatter.format(numero);
  }

  public siguiente(): void {
    this.infoJuegoService.setJuego1(this.dinero);
    this.infoJuegoService.setMaxJuego1(this.maxPuerta() * Juego1.INTENTOS);
    this.router.navigateByUrl('parte2');
  }

  private maxPuerta(): number {
    let max: number = this.puerta1;
    if (max < this.puerta2) {
      max = this.puerta2;
    }
    if (max < this.puerta3) {
      max = this.puerta3;
    }
    return max;
  }
}
