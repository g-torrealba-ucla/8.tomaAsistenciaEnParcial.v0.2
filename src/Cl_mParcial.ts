import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v2";
import { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
interface iResultObjects {
  objects: [iEstudiante] | null;
  error: string | false;
}
export interface iGrabarEstudiante {
  estudiante: Cl_mEstudiante;
  callback: Function;
}

export default class Cl_mParcial {
  public parcial: Cl_mEstudiante[];
  private db: Cl_dcytDb;
  readonly tbEstudiante: string = "L25.2.Asist-parcial2";
  readonly evaluacionTerminada: boolean = true;
  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.parcial = [];
  }
  estudiante(cedula: number): Cl_mEstudiante | undefined {
    return (
      this.parcial.find((estudiante) => estudiante.cedula === cedula) ||
      undefined
    );
  }
  grabarEstudiante({ estudiante, callback }: iGrabarEstudiante): void {
    this.db.addRecord({
      tabla: this.tbEstudiante,
      object: estudiante.toJSON(),
      callback: ({ id, objects, error }) => {
        if (error) throw new Error(error);
        this.setParcial(objects);
        callback?.(error);
      },
    });
  }
  cargar(callback: Function): void {
    this.db.listRecords({
      tabla: this.tbEstudiante,
      callback: ({ objects, error }: iResultObjects) => {
        if (error) throw new Error(error);
        else {
          this.setParcial(objects);
          callback?.(error);
        }
      },
    });
  }
  setParcial(parcial: iEstudiante[] | null) {
    parcial?.map((estudiante) => {
      this.parcial.push(new Cl_mEstudiante(estudiante));
    });
  }
}
