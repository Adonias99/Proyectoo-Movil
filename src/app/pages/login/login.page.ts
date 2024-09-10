import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  validar() {
    
    const contrasenaAlmacenada = localStorage.getItem('contrasena') || '1234'; 

    if (this.contrasena === contrasenaAlmacenada) {
      localStorage.setItem('usuario', this.usuario);
      this.navCtrl.navigateForward(['/home']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Validación usuario',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK'],
    });

    await alert.present();
  }

  restablecer() {
    this.navCtrl.navigateForward(['/restablecer', this.usuario]);
  }
}