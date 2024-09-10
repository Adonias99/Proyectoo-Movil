import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restablecer2PageRoutingModule } from './restablecer2-routing.module';

import { Restablecer2Page } from './restablecer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restablecer2PageRoutingModule
  ],
  declarations: [Restablecer2Page]
})
export class Restablecer2PageModule {}
