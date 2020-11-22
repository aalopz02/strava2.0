export class grupo {
  nombregrupo: string;
  nombreusuario:string;


  public constructor(init?: Partial<grupo>) {
    Object.assign(this, init);
}

}

