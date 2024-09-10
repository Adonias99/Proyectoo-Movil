import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restablecer2',
  templateUrl: './restablecer2.page.html',
  styleUrls: ['./restablecer2.page.scss'],
})
export class Restablecer2Page implements OnInit {

  nuevaContrasenna: string = '';
  usuario: string = '';
  usuarioRecibido: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el usuario recibido como parámetro
    this.usuarioRecibido = this.route.snapshot.paramMap.get('usuario') || '';
  }

  restablecer() {
    if (this.usuario === this.usuarioRecibido && this.nuevaContrasenna) {
      // Guardar la nueva contraseña en localStorage con el nombre de usuario
      localStorage.setItem('contrasena', this.nuevaContrasenna);
      this.navCtrl.navigateForward(['/elegir']);
    } else {
      alert('El usuario no coincide o la contraseña no es válida.');
    }
  }
}
