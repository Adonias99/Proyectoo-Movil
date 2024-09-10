export class Viaje {
  destino: string;
  capacidad: number;
  precio: number;
  hora: string;
  encuentro: string;
  estado: string; // Nuevo campo para el estado del viaje

  constructor(destino: string, capacidad: number, precio: number, hora: string, encuentro: string, estado: string = 'Pendiente') {
    this.destino = destino;
    this.capacidad = capacidad;
    this.precio = precio;
    this.hora = hora;
    this.encuentro = encuentro;
    this.estado = estado;
  }
}
