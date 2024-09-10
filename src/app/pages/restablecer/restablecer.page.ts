import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  usuario: string = '';
  usuarioIngresado: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usuarioIngresado = this.route.snapshot.paramMap.get('usuario') || '';
  }

  continuar() {
    if (this.usuario === this.usuarioIngresado) {
      this.navCtrl.navigateForward(['/restablecer2', this.usuario]);
    } else {
      alert('Usuario incorrecto');
    }
  }
}
