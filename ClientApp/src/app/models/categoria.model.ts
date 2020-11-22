/**
 * Categoria
 */
export class categoria {
    idcat : number
    nombre : string;
    rango : string;
     
    public constructor(init?: Partial<categoria>) {
        Object.assign(this, init);
    }
}