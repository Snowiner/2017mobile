import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkAuthsPage } from './park-auths';

@NgModule({
  declarations: [
    ParkAuthsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkAuthsPage),
  ],
})
export class ParkAuthsPageModule {}
