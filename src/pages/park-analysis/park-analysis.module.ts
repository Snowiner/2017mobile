import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkAnalysisPage } from './park-analysis';

@NgModule({
  declarations: [
    ParkAnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkAnalysisPage),
  ],
})
export class ParkAnalysisPageModule {}
