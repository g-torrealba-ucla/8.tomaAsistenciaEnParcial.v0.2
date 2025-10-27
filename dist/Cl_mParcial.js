import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v2";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";
export default class Cl_mParcial {
    constructor() {
        this.tbEstudiante = "L25.2.Asist-parcial2";
        this.evaluacionTerminada = true;
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.parcial = [];
        dtEstudiantes.map((estudiante) => this.parcial.push(new Cl_mEstudiante(estudiante)));
    }
    estudiante(cedula) {
        return (this.parcial.find((estudiante) => estudiante.cedula === cedula) ||
            undefined);
    }
    grabarEstudiante({ estudiante, callback }) {
        this.db.addRecord({
            tabla: this.tbEstudiante,
            object: estudiante.toJSON(),
            callback: ({ id, objects, error }) => {
                if (error)
                    throw new Error(error);
                this.setParcial(objects);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    cargar(callback) {
        this.db.listRecords({
            tabla: this.tbEstudiante,
            callback: ({ objects, error }) => {
                if (error)
                    throw new Error(error);
                else {
                    this.setParcial(objects);
                    callback === null || callback === void 0 ? void 0 : callback(error);
                }
            },
        });
    }
    setParcial(objects) {
        objects === null || objects === void 0 ? void 0 : objects.map((estudiante) => {
            let index = this.parcial.findIndex((e) => e.cedula === estudiante.cedula);
            if (index >= 0)
                this.parcial[index] = new Cl_mEstudiante(estudiante);
        });
    }
}
