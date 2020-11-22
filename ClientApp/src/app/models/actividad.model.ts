/**
 * Actividad
 */
export class actividad {

    idact: number;
    nombre: string;

    public constructor(init?: Partial<actividad>) {
        Object.assign(this, init);
    }
}
