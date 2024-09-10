import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-buscarviaje',
  templateUrl: './buscarviaje.page.html',
  styleUrls: ['./buscarviaje.page.scss'],
})
export class BuscarviajePage implements OnInit {

  viajes: Viaje[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    if (localStorage.getItem("viajes")) {
      this.viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      console.log("Viajes Cargados en Buscar Viaje:", this.viajes);
    } else {
      console.log("No hay viajes almacenados");
    }
  }

  aceptarViaje(viaje: Viaje) {
    
    if (viaje.capacidad > 0) {
      viaje.capacidad -= 1; 
      if (viaje.capacidad === 0) {
        viaje.estado = 'Vehículo lleno';
      }

      let viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      viajes = viajes.map((v: Viaje) => v.destino === viaje.destino && v.hora === viaje.hora ? viaje : v);
      localStorage.setItem("viajes", JSON.stringify(viajes));

      
      this.navCtrl.navigateForward(['/detalles-viaje', { destino: viaje.destino, hora: viaje.hora }]);
    }
  }
  qr(){
    this.navCtrl.navigateForward(['/qr'])
  }
}
