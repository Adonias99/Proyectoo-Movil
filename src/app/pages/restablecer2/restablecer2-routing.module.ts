import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restablecer2Page } from './restablecer2.page';

const routes: Routes = [
  {
    path: '',
    component: Restablecer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restablecer2PageRoutingModule {}
