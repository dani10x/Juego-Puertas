import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbTrigger } from '@nebular/theme';
import { Juego2 } from 'src/app/constants/constantes';
import { InfoJuegoService } from 'src/app/services/info-juego.service';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {

  titulo: string = Juego2.TITULO;
  puertasw: number = Juego2.PUERTAS_WIDHT;
  puertash: number = Juego2.PUERTAS_HEIGHT;
  click = NbTrigger.FOCUS;
  count: number = 0;
  dineroString: String = '$0';
  dinero: number = 0;
  puerta1w: number = Juego2.PUERTAS_WIDHT;
  puerta1h: number = Juego2.PUERTAS_HEIGHT;
  puerta2w: number = Juego2.PUERTAS_WIDHT;
  puerta2h: number = Juego2.PUERTAS_HEIGHT;
  puerta3w: number = Juego2.PUERTAS_WIDHT;
  puerta3h: number = Juego2.PUERTAS_HEIGHT;
  puerta1: number = 0;
  puerta1String: String = '';
  puerta2: number = 0;
  puerta2String: String = '';
  puerta3: number = 0;
  puerta3String: String = '';
  valores: number[] = [10, 20, 40, 50, 70, 100];

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
    this.count = Juego2.INTENTOS;
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
      case 1: this.addDinero(this.puerta1);
        this.encogerPuerta(2);
        this.encogerPuerta(3);
        break;
      case 2: this.addDinero(this.puerta2);
        this.encogerPuerta(1);
        this.encogerPuerta(3);
        break;
      case 3: this.addDinero(this.puerta3);
        this.encogerPuerta(1);
        this.encogerPuerta(2);
        break;
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

  public finalizar(): void {
    this.infoJuegoService.setJuego2(this.dinero);
    this.infoJuegoService.setMaxJuego2(this.maxPuerta() * Juego2.INTENTOS);
    this.router.navigateByUrl('final');
  }

  private encogerPuerta(puerta: number): void {
    switch (puerta) {
      case 1: this.puerta1h -= (this.puertash / 12);
        this.puerta1w -= (this.puertasw / 12);
        break;
      case 2: this.puerta2h -= (this.puertash / 12);
        this.puerta2w -= (this.puertasw / 12);
        break;
      case 3: this.puerta3h -= (this.puertash / 12);
        this.puerta3w -= (this.puertasw / 12);
        break;
    }
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
