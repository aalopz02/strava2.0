/**
 * Reto
 */
export class reto {
  nombrereto: string;
  d1: string;
  d2:string;
  tipoactividad:string;
  tipo:string;
  privacidad:string;
  patrocinadorId : number;

  public constructor(init?: Partial<reto>) {
    Object.assign(this, init);
}

}

