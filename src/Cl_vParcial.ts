import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";

export default class Cl_vEquipos extends Cl_vGeneral {
  private inCedulaBuscar: HTMLInputElement;
  private btCedula1: HTMLButtonElement;
  private lblEstudiante1: HTMLLabelElement;
  private btCedula2: HTMLButtonElement;
  private lblEstudiante2: HTMLLabelElement;
  private btCedula3: HTMLButtonElement;
  private lblEstudiante3: HTMLLabelElement;
  private btCedula4: HTMLButtonElement;
  private lblEstudiante4: HTMLLabelElement;
  private btCedula5: HTMLButtonElement;
  private lblEstudiante5: HTMLLabelElement;
  private equipo: Cl_mEstudiante | null = null;
  private divRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "infoEquipo" });
    this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
      refresh: () => {},
      oninput: () => {
        let estudiantes = this.controlador?.buscarCedulaParcial(this.cedula);
        if (!estudiantes) return;
        if (estudiantes[0]) {
          this.btCedula1.innerHTML = estudiantes[0].cedula.toString();
          this.lblEstudiante1.innerHTML = estudiantes[0].nombre;
        }
        if (estudiantes[1]) {
          this.btCedula2.innerHTML = estudiantes[1].cedula.toString();
          this.lblEstudiante2.innerHTML = estudiantes[1].nombre;
        }
        if (estudiantes[2]) {
          this.btCedula3.innerHTML = estudiantes[2].cedula.toString();
          this.lblEstudiante3.innerHTML = estudiantes[2].nombre;
        }
        if (estudiantes[3]) {
          this.btCedula4.innerHTML = estudiantes[3].cedula.toString();
          this.lblEstudiante4.innerHTML = estudiantes[3].nombre;
        }
        if (estudiantes[4]) {
          this.btCedula5.innerHTML = estudiantes[4].cedula.toString();
          this.lblEstudiante5.innerHTML = estudiantes[4].nombre;
        }
      },
    });
    this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
      onclick: () => {},
      refresh: () => {},
    }) as HTMLButtonElement;
    this.lblEstudiante1 = this.crearHTMLElement("lblEstudiante1", {
      type: tHTMLElement.LABEL,
      refresh: () => {},
    }) as HTMLLabelElement;
    this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
      onclick: () => {},
      refresh: () => {},
    });
    this.lblEstudiante2 = this.crearHTMLElement("lblEstudiante2", {
      type: tHTMLElement.LABEL,
      refresh: () => {},
    }) as HTMLLabelElement;
    this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
      onclick: () => {},
      refresh: () => {},
    });
    this.lblEstudiante3 = this.crearHTMLElement("lblEstudiante3", {
      type: tHTMLElement.LABEL,
      refresh: () => {},
    }) as HTMLLabelElement;
    this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
      onclick: () => {},
      refresh: () => {},
    });
    this.lblEstudiante4 = this.crearHTMLElement("lblEstudiante4", {
      type: tHTMLElement.LABEL,
      refresh: () => {},
    }) as HTMLLabelElement;
    this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
      onclick: () => {},
      refresh: () => {},
    });
    this.lblEstudiante5 = this.crearHTMLElement("lblEstudiante5", {
      type: tHTMLElement.LABEL,
      refresh: () => {},
    }) as HTMLLabelElement;
    this.divRegistrados = this.crearHTMLElement("divRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => {},
    }) as HTMLDivElement;
  }
  get cedula() {
    return +this.inCedulaBuscar.value;
  }
}
