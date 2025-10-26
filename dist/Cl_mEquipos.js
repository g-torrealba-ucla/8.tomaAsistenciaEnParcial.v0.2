import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v2";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";
export default class Cl_mParcial {
  constructor() {
    this.tbEquipo = "L25.2.defensaC2.1";
    this.evaluacionTerminada = true;
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.equipos = [];
    dtEstudiantes.map((equipo) =>
      this.equipos.push(new Cl_mEstudiante(equipo))
    );
  }
  equipo(nombre) {
    return this.equipos.find((equipo) => equipo.nombre === nombre) || undefined;
  }
  grabarEstudiante({ equipo, callback }) {
    let goCallback = ({ objects, error }) => {
      if (error) throw new Error(error);
      this.setEquipos(objects);
      callback === null || callback === void 0 ? void 0 : callback(error);
    };
    if (equipo.id) {
      this.db.editRecord({
        tabla: this.tbEquipo,
        object: equipo.toJSON(),
        callback: ({ objects, error }) => goCallback({ objects, error }),
      });
    } else
      this.db.addRecord({
        tabla: this.tbEquipo,
        object: equipo.toJSON(),
        callback: ({ id, objects, error }) => goCallback({ objects, error }),
      });
  }
  cargar(callback) {
    this.db.listRecords({
      tabla: this.tbEquipo,
      callback: ({ objects, error }) => {
        if (error) throw new Error(error);
        else {
          this.setEquipos(objects);
          callback === null || callback === void 0 ? void 0 : callback(error);
        }
      },
    });
  }
  setEquipos(equipos) {
    equipos === null || equipos === void 0
      ? void 0
      : equipos.map((equipo) => {
          let index = this.equipos.findIndex((e) => e.nombre === equipo.nombre);
          if (index >= 0) this.equipos[index] = new Cl_mEstudiante(equipo);
        });
  }
  notasCsv() {
    let notasCsv = "";
    this.equipos.map((equipo) => (notasCsv += equipo.notasCsv(3)));
    return notasCsv;
  }
}
