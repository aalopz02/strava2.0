/**
 * Carrera view
 */
export class carreraView {

    nombrecarrera: string;
    costo: number;
    fecha: string;
    cuentapago: number;
    tipoactividad : string;
    patrocinador : string;
    categoria : string;
    logo : string;
    suscrito : boolean;

    public constructor(init?: Partial<carreraView>) {
        Object.assign(this, init);
    }

}