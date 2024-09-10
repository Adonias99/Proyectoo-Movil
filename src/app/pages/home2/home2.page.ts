import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home2',
  templateUrl: 'home2.page.html',
  styleUrls: ['home2.page.scss'],
})
export class Home2Page {
usuario:string=''
  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }


  buscar() {
    this.navCtrl.navigateForward(['/buscarviaje']);
  }
  cerrar_sesion(){
    this.navCtrl.navigateForward(['/elegir']);
  }

  listaviaje(){
    this.navCtrl.navigateForward(['/lista-viaje']);
  }

  cancelarviaje(){
    this.navCtrl.navigateForward(['/cancelarviaje2']);
  }
  
}
