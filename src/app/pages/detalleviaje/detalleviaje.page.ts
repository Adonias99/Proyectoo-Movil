import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viaje } from 'src/app/model/viajes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detalleviaje',
  templateUrl: './detalleviaje.page.html',
  styleUrls: ['./detalleviaje.page.scss'],
})
export class DetalleviajePage implements OnInit {

  viaje: Viaje | undefined;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const destino = params['destino'];
      const hora = params['hora'];
      const capacidad = params['capacidad'];
      const encuentro = params ['encuentro'];
      const precio = params['precio'];
      this.cargarViaje(destino, hora, capacidad, encuentro,precio);
    });
  }

  cargarViaje(destino: string, capacidad:number, hora: string, encuentro:string, precio:number) {
    const viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
    this.viaje = viajes.find((v: Viaje) => v.destino === destino && v.hora === hora && capacidad === v.capacidad && encuentro === v.encuentro && precio === v.precio);
  }

  qr() {
    this.navCtrl.navigateForward(['/qr']);
  }
}
