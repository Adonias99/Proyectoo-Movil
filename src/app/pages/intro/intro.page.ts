import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements AfterViewInit {
  @ViewChild('card', { static: false }) card!: ElementRef;

  private animation?: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  ngAfterViewInit() {
    console.log('View has been initialized');
    this.play(); // Llamar al método play directamente después de la inicialización
  }

  play() {
    const imgElement = this.card.nativeElement.querySelector('img');
    if (imgElement) {
      console.log('Image element found:', imgElement);

      this.animation = this.animationCtrl
        .create()
        .addElement(imgElement)
        .duration(5000)
        .iterations(1)
        .fromTo('transform', 'scale(0.6)', 'scale(1.1)')
        .fromTo('opacity', '1', '0')
        .onFinish(() => {
          console.log('Animation finished, navigating to login');
          this.navCtrl.navigateForward('/elegir');
        });

      this.animation.play();

      console.log('Animation is playing');
    } else {
      console.error('Image element not found.');
    }
  }
}
