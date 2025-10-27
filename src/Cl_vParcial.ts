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
    super({ formName: "infoParcial" });
    this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
      refresh: () => {},
      oninput: () => this.actualizarBotones(),
    });
    this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
      onclick: () => this.grabarEstudiante(+this.btCedula1.innerHTML),
    }) as HTMLButtonElement;
    this.lblEstudiante1 = this.crearHTMLElement("lblEstudiante1", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
      onclick: () => this.grabarEstudiante(+this.btCedula2.innerHTML),
    });
    this.lblEstudiante2 = this.crearHTMLElement("lblEstudiante2", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
      onclick: () => this.grabarEstudiante(+this.btCedula3.innerHTML),
    });
    this.lblEstudiante3 = this.crearHTMLElement("lblEstudiante3", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
      onclick: () => this.grabarEstudiante(+this.btCedula4.innerHTML),
    });
    this.lblEstudiante4 = this.crearHTMLElement("lblEstudiante4", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
      onclick: () => this.grabarEstudiante(+this.btCedula5.innerHTML),
    });
    this.lblEstudiante5 = this.crearHTMLElement("lblEstudiante5", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.divRegistrados = this.crearHTMLElement("divRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => {
        this.divRegistrados.innerHTML = "";
        this.controlador?.registrados().forEach((estudiante) => {
          this.divRegistrados.innerHTML += `
          <li><b>${estudiante.numero}:</b>
          ${estudiante.cedula}, ${estudiante.nombre}<br>
          (${estudiante.profesor} 
          ${estudiante.materia}-S${estudiante.seccion})
          ${estudiante.creadoEl}</li>`;
        });
      },
    }) as HTMLDivElement;
  }
  get cedula() {
    return +this.inCedulaBuscar.value;
  }
  actualizarBotones() {
    let estudiantes = this.controlador?.buscarCedulaParcial(this.cedula),
      activateButton = (
        estudiante: iEstudiante,
        button: HTMLButtonElement,
        label: HTMLLabelElement
      ) => {
        button.innerHTML = estudiante ? estudiante.cedula.toString() : "";
        label.innerHTML = estudiante
          ? `${estudiante.numero}.${estudiante.nombre}\n
                (${estudiante.profesor} ${estudiante.materia}-S${estudiante.seccion})`
          : "";
      };
    if (!estudiantes) return;
    activateButton(estudiantes[0], this.btCedula1, this.lblEstudiante1);
    activateButton(estudiantes[1], this.btCedula2, this.lblEstudiante2);
    activateButton(estudiantes[2], this.btCedula3, this.lblEstudiante3);
    activateButton(estudiantes[3], this.btCedula4, this.lblEstudiante4);
    activateButton(estudiantes[4], this.btCedula5, this.lblEstudiante5);
  }
  grabarEstudiante(cedula: number) {
    this.controlador?.grabarEstudiante({
      cedula,
      callback: (error: string | false) => {
        if (error) alert(error);
        this.inCedulaBuscar.value = "";
        this.actualizarBotones();
        this.refresh();
      },
    });
  }
}
