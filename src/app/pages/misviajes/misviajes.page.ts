import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';  
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {

  viajes: Viaje[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    if (localStorage.getItem("viajes")) {
      this.viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      console.log("Viajes Cargados:", this.viajes);
    } else {
      console.log("No hay viajes almacenados");
    }
  }

  qr() {
    this.navCtrl.navigateForward(['/qr']);
  }
}
