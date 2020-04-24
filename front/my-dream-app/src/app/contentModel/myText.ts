import {MyStyle} from "./myStyle";


export class MyText {
  private _id: number;
  private _name: string;
  private _style_id: MyStyle[];
  private _Link: string;


  constructor(id: number, name: string, style_id?: MyStyle[], Link?: string) {
    this._id = id;
    this._name = name;
    this._style_id = style_id;
    this._Link = Link;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get style_id(): MyStyle[] {
    return this._style_id;
  }

  set style_id(value: MyStyle[]) {
    this._style_id = value;
  }

  get Link(): string {
    return this._Link;
  }

  set Link(value: string) {
    this._Link = value;
  }
}
