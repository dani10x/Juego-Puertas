export class Inicio {
  static readonly TITULO_APP: string = 'Puertas';
  static readonly TITULO: string = 'Nuevo Juego';
}

export class Juego1 {
  static readonly TITULO: string = 'Seleccione cualquiera de las puertas'; // titulo de la ventana - instrucciones
  static readonly INTENTOS: number = 10; //número máximo de intentos
  static readonly VALORES: number[] = [10, 20, 40, 50, 70, 100]; //array de posibles valores para las puertas
  static readonly PUERTAS_HEIGHT: number = 240; // divisible entre 12
  static readonly PUERTAS_WIDHT: number = 120; // divisible entre 12
}

export class Juego2 {
  static readonly TITULO: string = 'Seleccione cualquiera de las puertas'; // titulo de la ventana - instrucciones
  static readonly INTENTOS: number = 15; //número máximo de intentos
  static readonly VALORES: number[] = [10, 20, 40, 50, 70, 100]; //array de posibles valores para las puertas
  static readonly PUERTAS_HEIGHT: number = 240; // divisible entre 12
  static readonly PUERTAS_WIDHT: number = 120; // divisible entre 12
}

export class Final {
  static readonly TITULO: string = 'Resultados';
}

