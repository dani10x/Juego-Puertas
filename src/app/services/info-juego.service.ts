import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoJuegoService {

  private nombreJugador: string = '';
  private juego1: number = 0;
  private maxJuego1: number = 0;
  private juego2: number = 0;
  private maxJuego2: number = 0;

  constructor() { }

  public setJuego1(valor: number): void {
    this.juego1 = valor;
  }

  public setJuego2(valor: number): void {
    this.juego2 = valor;
  }

  public setNombreJugador(nombre: string): void {
    this.nombreJugador = nombre;
  }

  public setMaxJuego1(valor: number): void {
    this.maxJuego1 = valor;
  }

  public setMaxJuego2(valor: number): void {
    this.maxJuego2 = valor;
  }

  public getJuego1(): number {
    return this.juego1;
  }

  public getJuego2(): number {
    return this.juego2;
  }

  public getNombreJugador(): string {
    return this.nombreJugador;
  }

  public getMaxJuego1(): number {
    return this.maxJuego1;
  }

  public getMaxJuego2(): number {
    return this.maxJuego2;
  }

  public reset(): void {
    this.nombreJugador = '';
    this.juego1 = 0;
    this.juego2 = 0;
    this.maxJuego1 = 0;
    this.maxJuego2 = 0;
  }
}
