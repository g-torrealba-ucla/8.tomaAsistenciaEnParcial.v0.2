import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_mParcial, { iGrabarEstudiante } from "./Cl_mParcial.js";
import Cl_vEstudiantes from "./Cl_vParcial.js";

export default class Cl_controlador {
  public modelo: Cl_mParcial;
  public vista: Cl_vEstudiantes;
  constructor(modelo: Cl_mParcial, vista: Cl_vEstudiantes) {
    this.modelo = modelo;
    this.vista = vista;
  }
  grabarEstudiante({
    cedula,
    callback,
  }: {
    cedula: number;
    callback: Function;
  }): void {
    let estudiante = this.estudiante(cedula);
    if (!estudiante) return;
    this.modelo.grabarEstudiante({
      estudiante,
      callback,
    });
  }
  eliminarEstudiante({
    cedula,
    callback,
  }: {
    cedula: number;
    callback: Function;
  }): void {
    this.modelo.eliminarEstudiante({
      estudiante: this.estudiante(cedula),
      callback,
    });
  }
  estudiante(cedula: number | null): Cl_mEstudiante | null {
    if (!cedula) return null;
    return this.modelo.estudiante(cedula);
  }
  buscarCedulaParcial(cedula: number): iEstudiante[] {
    let estudiantes: iEstudiante[] = [];
    if (cedula === 0) return estudiantes;
    for (let index = 0; index < this.modelo.parcial.length; index++) {
      let estudiante = this.modelo.parcial[index];
      if (estudiante.tieneCedulaParcial(cedula)) {
        estudiantes.push(estudiante.toJSON());
        if (estudiantes.length === 5) break;
      }
    }
    return estudiantes;
  }
  registrados(): iEstudiante[] {
    let estudiantes: iEstudiante[] = [];
    this.modelo.parcial.map((estudiante) => {
      if (estudiante.id) estudiantes.push(estudiante.toJSON());
    });
    estudiantes.sort((a, b) => a.cedula - b.cedula);
    return estudiantes;
  }
}
