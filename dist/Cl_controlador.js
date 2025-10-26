export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  grabarEstudiante({ equipo, callback }) {
    this.modelo.grabarEstudiante({
      equipo,
      callback,
    });
  }
  equipo(nombre) {
    if (!nombre) return undefined;
    return this.modelo.equipo(nombre);
  }
  infoEquipos() {
    let equipos = [];
    this.modelo.equipos.map((equipo) => equipos.push(equipo.toJSON()));
    return equipos;
  }
}
