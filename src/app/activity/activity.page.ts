import { Component, OnInit } from '@angular/core';
import { Chronometer } from 'ngx-chronometer';

enum StatusChonometer {
  desactived = 0,
  pause = 1,
  start = 2,
  finish = 3,
  restart = 4,
  stop = 5,
  refresh = 6
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})


export class ActivityPage implements OnInit {

  chronometer: Chronometer = new Chronometer();
  startChr: boolean = false;
  pauseChr: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  run(chronometer: Chronometer, status: StatusChonometer) {

    if((status != StatusChonometer.pause) && (!this.pauseChr)){
      this.startChr = !this.startChr;
    }
    if(status === StatusChonometer.pause){
      this.pauseChr = !this.pauseChr;
    }
    if((status === StatusChonometer.start) && (this.pauseChr)){
      this.pauseChr = !this.pauseChr;
    }
    chronometer.status = status;
    switch (chronometer.status) {
    case StatusChonometer.pause:
        chronometer.pause();
        break;
    case StatusChonometer.restart:
        chronometer.restart();
        break;
    case StatusChonometer.start:
        chronometer.start();
        break;
    case StatusChonometer.finish:
        chronometer.stop();
        break;
    default:
        break;
    }
  } 

  onChronoEvent(chronometer: Chronometer) {
    console.log(chronometer);
  }

}
