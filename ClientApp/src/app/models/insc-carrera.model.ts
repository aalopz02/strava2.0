export class inscCarrera {
  nombrecarrera: string;
  nombreusuario:string;
  recibo:string;

  public constructor(init?: Partial<inscCarrera>) {
    Object.assign(this, init);
}

}

