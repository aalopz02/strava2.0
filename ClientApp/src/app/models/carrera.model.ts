export class Carrera {

    nombreCarrera: string;
    //Patrocinadores: Array<string>;
    //Ruta: string;
    costo: number;
    //Categorias: Array<number>;
    //fecha: string;
    cuentaBanco: number;
    //Tipo : string;


    public constructor(init?: Partial<Carrera>) {
        Object.assign(this, init);
    }

}