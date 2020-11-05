export class carrera {

    nombrecarrera: string;
    ruta: ArrayBuffer;
    costo: number;
    fecha: string;
    cuentapago: number;
    tipo : string;
    tipoactividad : number;
    privacidad : string;
    patrocinadorId : number;
    categoriaId : number;
    public constructor(init?: Partial<carrera>) {
        Object.assign(this, init);
    }

}