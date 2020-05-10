import {MyText} from "./myText";
import {MyStyle} from "./myStyle";


export class Content {


  private _id: string;
  private _template_id: number;
  private _text_id: MyText[];
  private _style_id: MyStyle[];
  private _img: string;



  constructor(id: string, text_id: MyText[],  style_id: MyStyle[],template_id?: number, img?: string) {
    this._id = id;
    this._template_id = template_id;
    this._text_id = text_id;
    this._style_id = style_id;
    this._img = img;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get template_id(): number {
    return this._template_id;
  }

  set template_id(value: number) {
    this._template_id = value;
  }

  get text_id(): MyText[] {
    return this._text_id;
  }

  set text_id(value: MyText[]) {
    this._text_id = value;
  }

  get style_id(): MyStyle[] {
    return this._style_id;
  }

  set style_id(value: MyStyle[]) {
    this._style_id = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }
}
