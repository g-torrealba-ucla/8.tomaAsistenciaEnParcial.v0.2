import Cl_controlador from "./Cl_controlador.js";
import Cl_mParcial from "./Cl_mParcial.js";
import Cl_vActividades from "./Cl_vParcial.js";

export default class Cl_index {
  constructor() {
    let modelo = new Cl_mParcial();
    modelo.cargar((error: string | false) => {
      if (error) alert(error);
      if (error) throw new Error(error);
      let vista = new Cl_vActividades();
      let controlador = new Cl_controlador(modelo, vista);
      vista.controlador = controlador;
      vista.refresh();
    });
  }
}
