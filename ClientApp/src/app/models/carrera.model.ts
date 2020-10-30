export class Carrera {

    NombreCarrera: string;
    Patrocinadores: Array<string>;
    Ruta: string;
    Costo: number;
    Categorias: Array<number>;
    Fecha: string;
    CuentaPago: number;
    Tipo : string;


    public constructor(init?: Partial<Carrera>) {
        Object.assign(this, init);
    }

}