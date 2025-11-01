import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEquipos extends Cl_vGeneral {
    constructor() {
        super({ formName: "infoParcial" });
        this.estudiante1 = null;
        this.estudiante2 = null;
        this.estudiante3 = null;
        this.estudiante4 = null;
        this.estudiante5 = null;
        this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
            refresh: () => { },
            oninput: () => this.actualizarBotones(),
        });
        this.btBorrarCedula = this.crearHTMLButtonElement("btBorrarCedula", {
            onclick: () => {
                this.inCedulaBuscar.value = "";
                this.actualizarBotones();
            },
            refresh: () => (this.btBorrarCedula.hidden = !this.cedula),
        });
        this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
            onclick: () => this.grabarEstudiante(+this.btCedula1.innerHTML),
            //      refresh: () => (this.btCedula1.disabled = Boolean(this.estudiante1?.id)),
        });
        this.btEliminar1 = this.crearHTMLButtonElement("btEliminar1", {
            onclick: () => this.eliminarEstudiante(+this.btCedula1.innerHTML),
            refresh: () => { var _a; return (this.btEliminar1.hidden = !((_a = this.estudiante1) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btConsultar1 = this.crearHTMLButtonElement("btConsultar1", {
            onclick: () => this.consultarEstudiante(this.estudiante1),
            refresh: () => (this.btConsultar1.hidden = !this.estudiante1),
        });
        this.lblEstudiante1 = this.crearHTMLElement("lblEstudiante1", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
            onclick: () => this.grabarEstudiante(+this.btCedula2.innerHTML),
            refresh: () => { var _a; return (this.btCedula2.disabled = Boolean((_a = this.estudiante2) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btEliminar2 = this.crearHTMLButtonElement("btEliminar2", {
            onclick: () => this.eliminarEstudiante(+this.btCedula2.innerHTML),
            refresh: () => { var _a; return (this.btEliminar2.hidden = !((_a = this.estudiante2) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btConsultar2 = this.crearHTMLButtonElement("btConsultar2", {
            onclick: () => this.consultarEstudiante(this.estudiante2),
            refresh: () => (this.btConsultar2.hidden = !this.estudiante2),
        });
        this.lblEstudiante2 = this.crearHTMLElement("lblEstudiante2", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
            onclick: () => this.grabarEstudiante(+this.btCedula3.innerHTML),
            refresh: () => { var _a; return (this.btCedula3.disabled = Boolean((_a = this.estudiante3) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btEliminar3 = this.crearHTMLButtonElement("btEliminar3", {
            onclick: () => this.eliminarEstudiante(+this.btCedula3.innerHTML),
            refresh: () => { var _a; return (this.btEliminar3.hidden = !((_a = this.estudiante3) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btConsultar3 = this.crearHTMLButtonElement("btConsultar3", {
            onclick: () => this.consultarEstudiante(this.estudiante3),
            refresh: () => (this.btConsultar3.hidden = !this.estudiante3),
        });
        this.lblEstudiante3 = this.crearHTMLElement("lblEstudiante3", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
            onclick: () => this.grabarEstudiante(+this.btCedula4.innerHTML),
            refresh: () => { var _a; return (this.btCedula4.disabled = Boolean((_a = this.estudiante4) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btEliminar4 = this.crearHTMLButtonElement("btEliminar4", {
            onclick: () => this.eliminarEstudiante(+this.btCedula4.innerHTML),
            refresh: () => { var _a; return (this.btEliminar4.hidden = !((_a = this.estudiante4) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btConsultar4 = this.crearHTMLButtonElement("btConsultar4", {
            onclick: () => this.consultarEstudiante(this.estudiante4),
            refresh: () => (this.btConsultar4.hidden = !this.estudiante4),
        });
        this.lblEstudiante4 = this.crearHTMLElement("lblEstudiante4", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
            onclick: () => this.grabarEstudiante(+this.btCedula5.innerHTML),
            refresh: () => { var _a; return (this.btCedula5.disabled = Boolean((_a = this.estudiante5) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btEliminar5 = this.crearHTMLButtonElement("btEliminar5", {
            onclick: () => this.eliminarEstudiante(+this.btCedula5.innerHTML),
            refresh: () => { var _a; return (this.btEliminar5.hidden = !((_a = this.estudiante5) === null || _a === void 0 ? void 0 : _a.id)); },
        });
        this.btConsultar5 = this.crearHTMLButtonElement("btConsultar5", {
            onclick: () => this.consultarEstudiante(this.estudiante5),
            refresh: () => (this.btConsultar5.hidden = !this.estudiante5),
        });
        this.lblEstudiante5 = this.crearHTMLElement("lblEstudiante5", {
            type: tHTMLElement.LABEL,
        });
        this.divRegistrados = this.crearHTMLElement("divRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => {
                var _a;
                this.divRegistrados.innerHTML = "";
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.registrados().forEach((estudiante) => {
                    this.divRegistrados.innerHTML += `
          <li><b>${estudiante.cedula}
          (${estudiante.numero})</b>: ${estudiante.nombre}<br>
          (${estudiante.profesor} 
          ${estudiante.materia}-S${estudiante.seccion})
          ${estudiante.creadoEl}</li>`;
                });
            },
        });
        this.estudiante1 = null;
        this.estudiante2 = null;
        this.estudiante3 = null;
        this.estudiante4 = null;
        this.estudiante5 = null;
    }
    get cedula() {
        return +this.inCedulaBuscar.value;
    }
    actualizarBotones() {
        var _a;
        let estudiantes = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.buscarCedulaParcial(this.cedula), activateButton = (estudiante, button, label) => {
            button.innerHTML = estudiante ? estudiante.cedula.toString() : "";
            label.innerHTML = estudiante
                ? `${estudiante.numero}.${estudiante.nombre}
                (${estudiante.profesor})`
                : "";
        };
        if (!estudiantes)
            return;
        this.estudiante1 = estudiantes[0];
        this.estudiante2 = estudiantes[1];
        this.estudiante3 = estudiantes[2];
        this.estudiante4 = estudiantes[3];
        this.estudiante5 = estudiantes[4];
        activateButton(estudiantes[0], this.btCedula1, this.lblEstudiante1);
        activateButton(estudiantes[1], this.btCedula2, this.lblEstudiante2);
        activateButton(estudiantes[2], this.btCedula3, this.lblEstudiante3);
        activateButton(estudiantes[3], this.btCedula4, this.lblEstudiante4);
        activateButton(estudiantes[4], this.btCedula5, this.lblEstudiante5);
        this.refresh();
    }
    grabarEstudiante(cedula) {
        var _a;
        (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.grabarEstudiante({
            cedula,
            callback: (error) => {
                if (error)
                    alert(error);
                this.inCedulaBuscar.value = "";
                this.actualizarBotones();
                this.refresh();
            },
        });
    }
    eliminarEstudiante(cedula) {
        var _a;
        if (!confirm(`¿Seguro de eliminar el estudiante ${cedula}?`))
            return;
        (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.eliminarEstudiante({
            cedula,
            callback: (error) => {
                if (error)
                    alert(error);
                this.actualizarBotones();
                this.refresh();
            },
        });
    }
    consultarEstudiante(estudiante) {
        if (!estudiante)
            return;
        alert(`
      N°: ${estudiante.numero}
      Cédula: ${estudiante.cedula}
      Nombre: ${estudiante.nombre}
      Profesor: ${estudiante.profesor}
      Materia: ${estudiante.materia}
      Seccion: ${estudiante.seccion}
      Creado el: ${estudiante.creadoEl}`);
    }
}
