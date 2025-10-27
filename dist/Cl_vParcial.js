import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEquipos extends Cl_vGeneral {
    constructor() {
        super({ formName: "infoParcial" });
        this.equipo = null;
        this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
            refresh: () => { },
            oninput: () => this.actualizarBotones(),
        });
        this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
            onclick: () => this.grabarEstudiante(+this.btCedula1.innerHTML),
        });
        this.lblEstudiante1 = this.crearHTMLElement("lblEstudiante1", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
            onclick: () => this.grabarEstudiante(+this.btCedula2.innerHTML),
        });
        this.lblEstudiante2 = this.crearHTMLElement("lblEstudiante2", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
            onclick: () => this.grabarEstudiante(+this.btCedula3.innerHTML),
        });
        this.lblEstudiante3 = this.crearHTMLElement("lblEstudiante3", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
            onclick: () => this.grabarEstudiante(+this.btCedula4.innerHTML),
        });
        this.lblEstudiante4 = this.crearHTMLElement("lblEstudiante4", {
            type: tHTMLElement.LABEL,
        });
        this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
            onclick: () => this.grabarEstudiante(+this.btCedula5.innerHTML),
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
          <li><b>${estudiante.numero}:</b>
          ${estudiante.cedula}, ${estudiante.nombre}<br>
          (${estudiante.profesor} 
          ${estudiante.materia}-S${estudiante.seccion})
          ${estudiante.creadoEl}</li>`;
                });
            },
        });
    }
    get cedula() {
        return +this.inCedulaBuscar.value;
    }
    actualizarBotones() {
        var _a;
        let estudiantes = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.buscarCedulaParcial(this.cedula), activateButton = (estudiante, button, label) => {
            button.innerHTML = estudiante ? estudiante.cedula.toString() : "";
            label.innerHTML = estudiante
                ? `${estudiante.numero}.${estudiante.nombre}\n
                (${estudiante.profesor} ${estudiante.materia}-S${estudiante.seccion})`
                : "";
        };
        if (!estudiantes)
            return;
        activateButton(estudiantes[0], this.btCedula1, this.lblEstudiante1);
        activateButton(estudiantes[1], this.btCedula2, this.lblEstudiante2);
        activateButton(estudiantes[2], this.btCedula3, this.lblEstudiante3);
        activateButton(estudiantes[3], this.btCedula4, this.lblEstudiante4);
        activateButton(estudiantes[4], this.btCedula5, this.lblEstudiante5);
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
}
