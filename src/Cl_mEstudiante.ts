export interface iEstudiante {
  id: number | null;
  creadoEl: string | null;
  numero: number;
  cedula: number;
  nombre: string;
  materia: string;
  seccion: number;
  profesor: string;
}
export default class Cl_mEstudiante {
  private _id: number | null = null;
  private _creadoEl: string | null = null;
  private _numero: number = 0;
  private _cedula: number = 0;
  private _nombre: string = "";
  private _materia: string = "";
  private _seccion: number = 0;
  private _profesor: string = "";
  constructor(
    {
      id = 0,
      creadoEl = null,
      numero = 0,
      cedula = 0,
      nombre = "",
      materia = "",
      seccion = 0,
      profesor = "",
    }: iEstudiante = {
      id: 0,
      creadoEl: null,
      numero: 0,
      cedula: 0,
      nombre: "",
      materia: "",
      seccion: 0,
      profesor: "",
    }
  ) {
    this.id = id;
    this.creadoEl = creadoEl;
    this.numero = numero;
    this.cedula = cedula;
    this.nombre = nombre;
    this.materia = materia;
    this.seccion = seccion;
    this.profesor = profesor;
  }
  set id(id: number | null) {
    this._id = id ? +id : null;
  }
  get id() {
    return this._id;
  }
  set creadoEl(creadoEl: string | null) {
    this._creadoEl = creadoEl;
  }
  get creadoEl() {
    return this._creadoEl;
  }
  set numero(numero: number) {
    this._numero = +numero;
  }
  get numero() {
    return this._numero;
  }
  set cedula(cedula: number) {
    this._cedula = +cedula;
  }
  get cedula() {
    return this._cedula;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set materia(materia: string) {
    this._materia = materia;
  }
  get materia() {
    return this._materia;
  }
  set seccion(seccion: number) {
    this._seccion = +seccion;
  }
  get seccion() {
    return this._seccion;
  }
  set profesor(profesor: string) {
    this._profesor = profesor;
  }
  get profesor() {
    return this._profesor;
  }
  tieneCedulaParcial(numero: number) {
    return this.cedula.toString().includes(numero.toString());
  }
  toJSON() {
    return {
      id: this._id,
      creadoEl: this._creadoEl,
      numero: this._numero,
      cedula: this._cedula,
      nombre: this._nombre,
      materia: this._materia,
      seccion: this._seccion,
      profesor: this._profesor,
    };
  }
}
