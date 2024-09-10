import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
usuario:string=''
  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }


  programar() {
    this.navCtrl.navigateForward(['/programar-viaje']);
  }

  misviajes(){
    this.navCtrl.navigateForward(['/misviajes']);
  }

  cancelarviaje(){
    this.navCtrl.navigateForward(['/cancelarviaje']);
  }
  cerrar_sesion(){
    this.navCtrl.navigateForward(['/elegir']);
  }

  
}
