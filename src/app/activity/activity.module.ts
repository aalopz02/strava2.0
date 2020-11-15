import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';
import { NgxChronometerModule } from 'ngx-chronometer';

import { ActivityPage } from './activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule,
    NgxChronometerModule
  ],
  declarations: [ActivityPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivityPageModule {}
