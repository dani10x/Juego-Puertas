import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Final } from 'src/app/constants/constantes';
import { InfoJuegoService } from 'src/app/services/info-juego.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  titulo: string = Final.TITULO;
  nombre: string = '';
  juego1: string = '';
  juego2: string = '';
  maxJuego1: string = '';
  maxJuego2: string = '';

  constructor(private router: Router, private infoJuegoService: InfoJuegoService) { }

  ngOnInit(): void {
    if (this.infoJuegoService.getNombreJugador() === '') {
      this.router.navigateByUrl('');
    }
    this.nombre = this.infoJuegoService.getNombreJugador();
    this.juego1 = this.numeroToCurrency(this.infoJuegoService.getJuego1());
    this.maxJuego1 = this.numeroToCurrency(this.infoJuegoService.getMaxJuego1());
    this.juego2 = this.numeroToCurrency(this.infoJuegoService.getJuego2());
    this.maxJuego2 = this.numeroToCurrency(this.infoJuegoService.getMaxJuego2());
  }

  public nuevo(): void {
    this.infoJuegoService.reset();
    this.router.navigateByUrl('');
  }

  private numeroToCurrency(numero: number): string {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

    return formatter.format(numero);
  }

}
