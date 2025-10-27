import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
import { dtEstudiantes } from "./data/dtEstudiantes.js";
import { copyToClipboard } from "./tools/string.tools.js";
export default class Cl_vEquipos extends Cl_vGeneral {
  constructor() {
    super({ formName: "infoParcial" });
    this.equipo = null;
    this.selEquipo = this.crearHTMLSelectElement("selEquipo", {
      elementsSource: dtEstudiantes,
      valueAttributeName: "nombre",
      textExpresion: (equipo) => {
        return equipo.nombre;
      },
      onchange: () => {
        var _a, _b, _c;
        let equipo =
          (_a = this.controlador) === null || _a === void 0
            ? void 0
            : _a.equipo(this.selEquipo.value);
        this.equipo =
          (_c =
            (_b = this.controlador) === null || _b === void 0
              ? void 0
              : _b.equipo(
                  equipo === null || equipo === void 0 ? void 0 : equipo.nombre
                )) !== null && _c !== void 0
            ? _c
            : null;
        this.refresh();
      },
    });
    this.lblCedula1 = this.crearHTMLElement("lblCedula1", {
      type: tHTMLElement.LABEL,
      refresh: () => {
        var _a, _b;
        return (this.lblCedula1.innerHTML =
          (_b =
            (_a = this.equipo) === null || _a === void 0
              ? void 0
              : _a.cedula1.toString()) !== null && _b !== void 0
            ? _b
            : "________");
      },
    });
    this.inNotaCedula1 = this.crearHTMLInputElement("inNotaCedula1", {
      refresh: () => {
        var _a, _b, _c;
        this.inNotaCedula1.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
        this.inNotaCedula1.value =
          (_c =
            (_b = this.equipo) === null || _b === void 0
              ? void 0
              : _b.notaCedula1.toString()) !== null && _c !== void 0
            ? _c
            : "";
      },
      onchange: () => {
        if (this.equipo) {
          this.equipo.notaCedula1 = this.notaCedula1;
          this.grabarEstudiante();
        }
      },
    });
    this.lblCedula2 = this.crearHTMLElement("lblCedula2", {
      type: tHTMLElement.LABEL,
      refresh: () => {
        var _a, _b;
        return (this.lblCedula2.innerHTML =
          (_b =
            (_a = this.equipo) === null || _a === void 0
              ? void 0
              : _a.cedula2.toString()) !== null && _b !== void 0
            ? _b
            : "________");
      },
    });
    this.inNotaCedula2 = this.crearHTMLInputElement("inNotaCedula2", {
      refresh: () => {
        var _a, _b, _c;
        this.inNotaCedula2.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
        this.inNotaCedula2.value =
          (_c =
            (_b = this.equipo) === null || _b === void 0
              ? void 0
              : _b.notaCedula2.toString()) !== null && _c !== void 0
            ? _c
            : "";
      },
      onchange: () => {
        if (this.equipo) {
          this.equipo.notaCedula2 = this.notaCedula2;
          this.grabarEstudiante();
        }
      },
    });
    this.lblCedula3 = this.crearHTMLElement("lblCedula3", {
      type: tHTMLElement.LABEL,
      refresh: () => {
        var _a, _b;
        return (this.lblCedula3.innerHTML =
          (_b =
            (_a = this.equipo) === null || _a === void 0
              ? void 0
              : _a.cedula3.toString()) !== null && _b !== void 0
            ? _b
            : "________");
      },
    });
    this.inNotaCedula3 = this.crearHTMLInputElement("inNotaCedula3", {
      refresh: () => {
        var _a, _b, _c;
        this.inNotaCedula3.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
        this.inNotaCedula3.value =
          (_c =
            (_b = this.equipo) === null || _b === void 0
              ? void 0
              : _b.notaCedula3.toString()) !== null && _c !== void 0
            ? _c
            : "";
      },
      onchange: () => {
        if (this.equipo) {
          this.equipo.notaCedula3 = this.notaCedula3;
          this.grabarEstudiante();
        }
      },
    });
    this.lblCedula4 = this.crearHTMLElement("lblCedula4", {
      type: tHTMLElement.LABEL,
      refresh: () => {
        var _a, _b, _c;
        return (this.lblCedula4.innerHTML =
          (_c =
            (_b =
              (_a = this.equipo) === null || _a === void 0
                ? void 0
                : _a.cedula4) === null || _b === void 0
              ? void 0
              : _b.toString()) !== null && _c !== void 0
            ? _c
            : "________");
      },
    });
    this.inNotaCedula4 = this.crearHTMLInputElement("inNotaCedula4", {
      refresh: () => {
        var _a, _b, _c;
        this.inNotaCedula4.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
        this.inNotaCedula4.value =
          (_c =
            (_b = this.equipo) === null || _b === void 0
              ? void 0
              : _b.notaCedula4.toString()) !== null && _c !== void 0
            ? _c
            : "";
      },
      onchange: () => {
        if (this.equipo) {
          this.equipo.notaCedula4 = this.notaCedula4;
          this.grabarEstudiante();
        }
      },
    });
    this.lblCedula5 = this.crearHTMLElement("lblCedula5", {
      type: tHTMLElement.LABEL,
      refresh: () => {
        var _a, _b, _c;
        return (this.lblCedula5.innerHTML =
          (_c =
            (_b =
              (_a = this.equipo) === null || _a === void 0
                ? void 0
                : _a.cedula5) === null || _b === void 0
              ? void 0
              : _b.toString()) !== null && _c !== void 0
            ? _c
            : "________");
      },
    });
    this.inNotaCedula5 = this.crearHTMLInputElement("inNotaCedula5", {
      refresh: () => {
        var _a, _b, _c;
        this.inNotaCedula5.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
        this.inNotaCedula5.value =
          (_c =
            (_b = this.equipo) === null || _b === void 0
              ? void 0
              : _b.notaCedula5.toString()) !== null && _c !== void 0
            ? _c
            : "";
      },
      onchange: () => {
        if (this.equipo) {
          this.equipo.notaCedula5 = this.notaCedula5;
          this.grabarEstudiante();
        }
      },
    });
    this.btNotaGlobal = this.crearHTMLButtonElement("btNotaGlobal", {
      onclick: () => {
        let nota = prompt("Ingrese la nota a asignar:", "0");
        if (this.equipo && nota && !Number.isNaN(+nota)) {
          this.equipo.notaCedula1 =
            this.equipo.notaCedula2 =
            this.equipo.notaCedula3 =
            this.equipo.notaCedula4 =
            this.equipo.notaCedula5 =
              +nota;
          this.grabarEstudiante((error) => this.refresh());
        }
      },
      refresh: () => {
        var _a;
        this.btNotaGlobal.disabled = Boolean(
          !this.equipo ||
            ((_a = this.controlador) === null || _a === void 0
              ? void 0
              : _a.modelo.evaluacionTerminada)
        );
      },
    });
    this.btNuevaObservacion = this.crearHTMLButtonElement(
      "btNuevaObservacion",
      {
        onclick: () => {
          if (!this.equipo) return;
          let observacion = prompt("Ingrese la observación:", "");
          if (observacion) {
            this.equipo.observaciones += `${
              this.equipo.observaciones ? "\n" : ""
            }${observacion}`;
            this.grabarEstudiante((error) => this.refresh());
          }
        },
        refresh: () => {
          var _a;
          this.btNuevaObservacion.disabled = Boolean(
            !this.equipo ||
              ((_a = this.controlador) === null || _a === void 0
                ? void 0
                : _a.modelo.evaluacionTerminada)
          );
        },
      }
    );
    this.divObservaciones = this.crearHTMLElement("divObservaciones", {
      type: tHTMLElement.CONTAINER,
      refresh: () => {
        var _a;
        this.divObservaciones.innerHTML = "";
        let observaciones =
          (_a = this.equipo) === null || _a === void 0
            ? void 0
            : _a.observaciones.split("\n");
        observaciones === null || observaciones === void 0
          ? void 0
          : observaciones.forEach((observacion) => {
              let p = document.createElement("li");
              p.innerHTML = observacion;
              this.divObservaciones.appendChild(p);
            });
      },
    });
    this.btExportarCsv = this.crearHTMLButtonElement("btExportarCsv", {
      onclick: () => {
        var _a;
        return copyToClipboard(
          ((_a = this.controlador) === null || _a === void 0
            ? void 0
            : _a.modelo.notasCsv()) || "No hay datos para copiar"
        );
      },
    });
    this.equipo = null;
    this.selEquipo.selectedIndex = -1;
    this.btNotaGlobal.hidden = true;
    this.btNuevaObservacion.hidden = true;
    this.refresh();
  }
  get notaCedula1() {
    return +this.inNotaCedula1.value;
  }
  get notaCedula2() {
    return +this.inNotaCedula2.value;
  }
  get notaCedula3() {
    return +this.inNotaCedula3.value;
  }
  get notaCedula4() {
    return +this.inNotaCedula4.value;
  }
  get notaCedula5() {
    return +this.inNotaCedula5.value;
  }
  grabarEstudiante(callback) {
    var _a, _b;
    if (
      !((_a = this.controlador) === null || _a === void 0
        ? void 0
        : _a.modelo.evaluacionTerminada) &&
      this.equipo
    )
      (_b = this.controlador) === null || _b === void 0
        ? void 0
        : _b.grabarEstudiante({
            equipo: this.equipo,
            callback: (error) => {
              if (error) alert(error);
              callback === null || callback === void 0
                ? void 0
                : callback(error);
            },
          });
  }
}
