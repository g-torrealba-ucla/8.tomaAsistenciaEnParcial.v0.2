import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251027-1820";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";
export default class Cl_mParcial {
    constructor() {
        this.tbEstudiante = "L25.2.Asist-parcial2";
        this.evaluacionTerminada = true;
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.parcial = [];
    }
    estudiante(cedula) {
        return (this.parcial.find((estudiante) => estudiante.cedula === cedula) || null);
    }
    grabarEstudiante({ estudiante, callback }) {
        if (!estudiante)
            callback === null || callback === void 0 ? void 0 : callback("El estudiante ya existe");
        this.db.addRecord({
            tabla: this.tbEstudiante,
            registroAlias: estudiante.cedula.toString(),
            object: estudiante.toJSON(),
            callback: ({ id, objects, error }) => {
                if (!error)
                    this.setParcial(objects);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    eliminarEstudiante({ estudiante, callback, }) {
        if (!estudiante)
            return;
        this.db.deleteRecord({
            tabla: this.tbEstudiante,
            object: estudiante.toJSON(),
            callback: ({ objects, error }) => {
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
        this.parcial = [];
        dtEstudiantes.map((estudiante) => this.parcial.push(new Cl_mEstudiante(estudiante)));
        objects === null || objects === void 0 ? void 0 : objects.map((estudiante) => {
            let index = this.parcial.findIndex((e) => e.cedula === estudiante.cedula);
            if (index >= 0)
                this.parcial[index] = new Cl_mEstudiante(estudiante);
        });
    }
}
