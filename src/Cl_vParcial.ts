import Cl_mEstudiante, { iEstudiante } from "./Cl_mEstudiante.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";

export default class Cl_vEquipos extends Cl_vGeneral {
  private inCedulaBuscar: HTMLInputElement;
  private btCedula1: HTMLButtonElement;
  private btEliminar1: HTMLButtonElement;
  private btConsultar1: HTMLButtonElement;
  private lblEstudiante1: HTMLLabelElement;
  private btCedula2: HTMLButtonElement;
  private btEliminar2: HTMLButtonElement;
  private btConsultar2: HTMLButtonElement;
  private lblEstudiante2: HTMLLabelElement;
  private btCedula3: HTMLButtonElement;
  private btEliminar3: HTMLButtonElement;
  private btConsultar3: HTMLButtonElement;
  private lblEstudiante3: HTMLLabelElement;
  private btCedula4: HTMLButtonElement;
  private btEliminar4: HTMLButtonElement;
  private btConsultar4: HTMLButtonElement;
  private lblEstudiante4: HTMLLabelElement;
  private btCedula5: HTMLButtonElement;
  private btEliminar5: HTMLButtonElement;
  private btConsultar5: HTMLButtonElement;
  private lblEstudiante5: HTMLLabelElement;
  private estudiante1: iEstudiante | null = null;
  private estudiante2: iEstudiante | null = null;
  private estudiante3: iEstudiante | null = null;
  private estudiante4: iEstudiante | null = null;
  private estudiante5: iEstudiante | null = null;
  private divRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "infoParcial" });
    this.inCedulaBuscar = this.crearHTMLInputElement("inCedulaBuscar", {
      refresh: () => {},
      oninput: () => this.actualizarBotones(),
    });
    this.btCedula1 = this.crearHTMLButtonElement("btCedula1", {
      onclick: () => this.grabarEstudiante(+this.btCedula1.innerHTML),
      refresh: () => (this.btCedula1.disabled = Boolean(this.estudiante1?.id)),
    }) as HTMLButtonElement;
    this.btEliminar1 = this.crearHTMLButtonElement("btEliminar1", {
      onclick: () => this.eliminarEstudiante(+this.btCedula1.innerHTML),
      refresh: () => (this.btEliminar1.hidden = !this.estudiante1?.id),
    });
    this.btConsultar1 = this.crearHTMLButtonElement("btConsultar1", {
      onclick: () => this.consultarEstudiante(this.estudiante1),
      refresh: () => (this.btConsultar1.hidden = !this.estudiante1),
    });
    this.lblEstudiante1 = this.crearHTMLElement("lblEstudiante1", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula2 = this.crearHTMLButtonElement("btCedula2", {
      onclick: () => this.grabarEstudiante(+this.btCedula2.innerHTML),
      refresh: () => (this.btCedula2.disabled = Boolean(this.estudiante2?.id)),
    });
    this.btEliminar2 = this.crearHTMLButtonElement("btEliminar2", {
      onclick: () => this.eliminarEstudiante(+this.btCedula2.innerHTML),
      refresh: () => (this.btEliminar2.hidden = !this.estudiante2?.id),
    });
    this.btConsultar2 = this.crearHTMLButtonElement("btConsultar2", {
      onclick: () => this.consultarEstudiante(this.estudiante2),
      refresh: () => (this.btConsultar2.hidden = !this.estudiante2),
    });
    this.lblEstudiante2 = this.crearHTMLElement("lblEstudiante2", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula3 = this.crearHTMLButtonElement("btCedula3", {
      onclick: () => this.grabarEstudiante(+this.btCedula3.innerHTML),
      refresh: () => (this.btCedula3.disabled = Boolean(this.estudiante3?.id)),
    });
    this.btEliminar3 = this.crearHTMLButtonElement("btEliminar3", {
      onclick: () => this.eliminarEstudiante(+this.btCedula3.innerHTML),
      refresh: () => (this.btEliminar3.hidden = !this.estudiante3?.id),
    });
    this.btConsultar3 = this.crearHTMLButtonElement("btConsultar3", {
      onclick: () => this.consultarEstudiante(this.estudiante3),
      refresh: () => (this.btConsultar3.hidden = !this.estudiante3),
    });
    this.lblEstudiante3 = this.crearHTMLElement("lblEstudiante3", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula4 = this.crearHTMLButtonElement("btCedula4", {
      onclick: () => this.grabarEstudiante(+this.btCedula4.innerHTML),
      refresh: () => (this.btCedula4.disabled = Boolean(this.estudiante4?.id)),
    });
    this.btEliminar4 = this.crearHTMLButtonElement("btEliminar4", {
      onclick: () => this.eliminarEstudiante(+this.btCedula4.innerHTML),
      refresh: () => (this.btEliminar4.hidden = !this.estudiante4?.id),
    });
    this.btConsultar4 = this.crearHTMLButtonElement("btConsultar4", {
      onclick: () => this.consultarEstudiante(this.estudiante4),
      refresh: () => (this.btConsultar4.hidden = !this.estudiante4),
    });
    this.lblEstudiante4 = this.crearHTMLElement("lblEstudiante4", {
      type: tHTMLElement.LABEL,
    }) as HTMLLabelElement;
    this.btCedula5 = this.crearHTMLButtonElement("btCedula5", {
      onclick: () => this.grabarEstudiante(+this.btCedula5.innerHTML),
      refresh: () => (this.btCedula5.disabled = Boolean(this.estudiante5?.id)),
    });
    this.btEliminar5 = this.crearHTMLButtonElement("btEliminar5", {
      onclick: () => this.eliminarEstudiante(+this.btCedula5.innerHTML),
      refresh: () => (this.btEliminar5.hidden = !this.estudiante5?.id),
    });
    this.btConsultar5 = this.crearHTMLButtonElement("btConsultar5", {
      onclick: () => this.consultarEstudiante(this.estudiante5),
      refresh: () => (this.btConsultar5.hidden = !this.estudiante5),
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
          <li><b>${estudiante.cedula}
          (${estudiante.numero})</b>: ${estudiante.nombre}<br>
          (${estudiante.profesor} 
          ${estudiante.materia}-S${estudiante.seccion})
          ${estudiante.creadoEl}</li>`;
        });
      },
    }) as HTMLDivElement;
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
    let estudiantes = this.controlador?.buscarCedulaParcial(this.cedula),
      activateButton = (
        estudiante: iEstudiante,
        button: HTMLButtonElement,
        label: HTMLLabelElement
      ) => {
        button.innerHTML = estudiante ? estudiante.cedula.toString() : "";
        label.innerHTML = estudiante
          ? `${estudiante.numero}.${estudiante.nombre}
                (${estudiante.profesor})`
          : "";
      };
    if (!estudiantes) return;
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
  eliminarEstudiante(cedula: number) {
    if (!confirm(`¿Seguro de eliminar el estudiante ${cedula}?`)) return;
    this.controlador?.eliminarEstudiante({
      cedula,
      callback: (error: string | false) => {
        if (error) alert(error);
        this.actualizarBotones();
        this.refresh();
      },
    });
  }
  consultarEstudiante(estudiante: iEstudiante | null) {
    if (!estudiante) return;
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
