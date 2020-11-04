export class carrera {

    nombrecarrera: string;
    ruta: ArrayBuffer;
    costo: number;
    fecha: string;
    cuentapago: number;
    tipo : string;
    tipoactividad : number;
    privacidad : string;
    
    public constructor(init?: Partial<carrera>) {
        Object.assign(this, init);
    }

}