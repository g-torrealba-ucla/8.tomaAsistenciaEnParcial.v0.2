export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    grabarEstudiante({ cedula, callback, }) {
        let estudiante = this.estudiante(cedula);
        if (!estudiante)
            return;
        this.modelo.grabarEstudiante({
            estudiante,
            callback,
        });
    }
    estudiante(cedula) {
        if (!cedula)
            return undefined;
        return this.modelo.estudiante(cedula);
    }
    buscarCedulaParcial(cedula) {
        let estudiantes = [];
        if (cedula === 0)
            return estudiantes;
        for (let index = 0; index < this.modelo.parcial.length; index++) {
            let estudiante = this.modelo.parcial[index];
            if (!this.modelo.parcial[index].id &&
                estudiante.tieneCedulaParcial(cedula)) {
                estudiantes.push(estudiante.toJSON());
                if (estudiantes.length === 5)
                    break;
            }
        }
        return estudiantes;
    }
    registrados() {
        let estudiantes = [];
        this.modelo.parcial.map((estudiante) => {
            if (estudiante.id)
                estudiantes.push(estudiante.toJSON());
        });
        estudiantes.sort((a, b) => a.cedula - b.cedula);
        return estudiantes;
    }
}
