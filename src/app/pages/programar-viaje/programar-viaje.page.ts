import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje } from 'src/app/model/viajes';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage implements OnInit {

  destino: string = '';
  capacidad: number | null = null;  // Cambiado a null para evitar valor inicial de 0
  precio: number | null = null;     // Cambiado a null para evitar valor inicial de 0
  hora: string = '';
  encuentro: string='';

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  programarViaje() {
    if (this.destino && this.capacidad !== null && this.precio !== null && this.hora) {
      let nuevoViaje = new Viaje(this.destino, this.capacidad, this.precio, this.hora,this.encuentro);

      let viajes: Viaje[] = [];
      if (localStorage.getItem("viajes")) {
        viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      }
      viajes.push(nuevoViaje);
      localStorage.setItem("viajes", JSON.stringify(viajes));
      console.log("Viaje Grabado:", nuevoViaje);
      this.navCtrl.navigateForward(['/misviajes']);
    } else {
      console.log("Por favor, complete todos los campos.");
    }
  }
}
