import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoJuegoService } from 'src/app/services/info-juego.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  titulo: String = 'Nuevo Juego';
  nombreForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private infoJuegoService: InfoJuegoService) {
    this.nombreForm = fb.group({
      nombre: ['', Validators.required],
    });
  }

  public nuevoJuego(): void {
    this.infoJuegoService.setNombreJugador(this.nombreForm.get('nombre')?.value);
    this.router.navigateByUrl('parte1');
  }
}
