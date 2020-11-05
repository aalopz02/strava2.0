export class Reto {
  name: string;
  time_available: string;
  activity_type:string;
  type:string;
  privacy:string;


  constructor(name: string, time_available: string, activity_type: string, type: string, privacy: string){
    this.name = name;
    this.time_available = time_available;
    this.activity_type = activity_type;
    this.type = type;
    this.privacy = privacy;
   
  }

}

