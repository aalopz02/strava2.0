/**
 * Patrocinador
 */
export class patrocinador {
    idpat : number
    nombre : string;
    representante : string;
    telefono : number;
    logo : ArrayBuffer;
     
    public constructor(init?: Partial<patrocinador>) {
        Object.assign(this, init);
    }
}