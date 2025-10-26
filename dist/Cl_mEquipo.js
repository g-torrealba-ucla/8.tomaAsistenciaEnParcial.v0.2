export default class Cl_mEstudiante {
  constructor(
    {
      id = 0,
      nombre = "",
      cedula1 = 0,
      notaCedula1 = 0,
      cedula2 = 0,
      notaCedula2 = 0,
      cedula3 = 0,
      notaCedula3 = 0,
      cedula4 = 0,
      notaCedula4 = 0,
      cedula5 = 0,
      notaCedula5 = 0,
      observaciones = "",
    } = {
      id: 0,
      nombre: "",
      cedula1: 0,
      notaCedula1: 0,
      cedula2: 0,
      notaCedula2: 0,
      cedula3: 0,
      notaCedula3: 0,
      cedula4: 0,
      notaCedula4: 0,
      cedula5: 0,
      notaCedula5: 0,
      observaciones: "",
    }
  ) {
    this._id = 0;
    this._nombre = "";
    this._cedula1 = 0;
    this._notaCedula1 = 0;
    this._cedula2 = 0;
    this._notaCedula2 = 0;
    this._cedula3 = 0;
    this._notaCedula3 = 0;
    this._cedula4 = 0;
    this._notaCedula4 = 0;
    this._cedula5 = 0;
    this._notaCedula5 = 0;
    this._observaciones = "";
    this.id = id;
    this.nombre = nombre;
    this.cedula1 = cedula1;
    this.notaCedula1 = notaCedula1;
    this.cedula2 = cedula2;
    this.notaCedula2 = notaCedula2;
    this.cedula3 = cedula3;
    this.notaCedula3 = notaCedula3;
    this.cedula4 = cedula4;
    this.notaCedula4 = notaCedula4;
    this.cedula5 = cedula5;
    this.notaCedula5 = notaCedula5;
    this.observaciones = observaciones;
  }
  set id(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
  set nombre(nombre) {
    this._nombre = nombre.trim();
  }
  get nombre() {
    return this._nombre;
  }
  set cedula1(cedula1) {
    this._cedula1 = +cedula1;
  }
  get cedula1() {
    return this._cedula1;
  }
  set notaCedula1(notaCedula1) {
    this._notaCedula1 = +notaCedula1;
  }
  get notaCedula1() {
    return this._notaCedula1;
  }
  set cedula2(cedula2) {
    this._cedula2 = +cedula2;
  }
  get cedula2() {
    return this._cedula2;
  }
  set notaCedula2(notaCedula2) {
    this._notaCedula2 = +notaCedula2;
  }
  get notaCedula2() {
    return this._notaCedula2;
  }
  set cedula3(cedula3) {
    this._cedula3 = +cedula3;
  }
  get cedula3() {
    return this._cedula3;
  }
  set notaCedula3(notaCedula3) {
    this._notaCedula3 = +notaCedula3;
  }
  get notaCedula3() {
    return this._notaCedula3;
  }
  set cedula4(cedula4) {
    this._cedula4 = cedula4 ? +cedula4 : null;
  }
  get cedula4() {
    return this._cedula4;
  }
  set notaCedula4(notaCedula4) {
    this._notaCedula4 = this._cedula4 ? +notaCedula4 : 0;
  }
  get notaCedula4() {
    return this._notaCedula4;
  }
  set cedula5(cedula5) {
    this._cedula5 = cedula5 ? +cedula5 : null;
  }
  get cedula5() {
    return this._cedula5;
  }
  set notaCedula5(notaCedula5) {
    this._notaCedula5 = this._cedula5 ? +notaCedula5 : 0;
  }
  get notaCedula5() {
    return this._notaCedula5;
  }
  set observaciones(observaciones) {
    this._observaciones = observaciones;
  }
  get observaciones() {
    return this._observaciones;
  }
  notasCsv(valor) {
    return (
      (this.cedula1
        ? `${this.cedula1},${((this.notaCedula1 * valor) / 100).toFixed(2)}\n`
        : "") +
      (this.cedula2
        ? `${this.cedula2},${((this.notaCedula2 * valor) / 100).toFixed(2)}\n`
        : "") +
      (this.cedula3
        ? `${this.cedula3},${((this.notaCedula3 * valor) / 100).toFixed(2)}\n`
        : "") +
      (this.cedula4
        ? `${this.cedula4},${((this.notaCedula4 * valor) / 100).toFixed(2)}\n`
        : "") +
      (this.cedula5
        ? `${this.cedula5},${((this.notaCedula5 * valor) / 100).toFixed(2)}\n`
        : "")
    );
  }
  toJSON() {
    return {
      id: this._id,
      nombre: this._nombre,
      cedula1: this._cedula1,
      notaCedula1: this._notaCedula1,
      cedula2: this._cedula2,
      notaCedula2: this._notaCedula2,
      cedula3: this._cedula3,
      notaCedula3: this._notaCedula3,
      cedula4: this._cedula4,
      notaCedula4: this._notaCedula4,
      cedula5: this._cedula5,
      notaCedula5: this._notaCedula5,
      observaciones: this._observaciones,
    };
  }
}
