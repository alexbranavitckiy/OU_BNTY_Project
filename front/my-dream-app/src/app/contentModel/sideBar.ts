import {Style} from "@angular/cli/lib/config/schema";
import {MyText} from "./myText";


export class SideBar {


  private _id: number;
  private _maxLevel: number;
  private _text_id: MyText;
  private _style_id: Style;


  constructor(id: number, maxLevel: number, text_id: MyText, style_id: Style) {
    this._id = id;
    this._maxLevel = maxLevel;
    this._text_id = text_id;
    this._style_id = style_id;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get maxLevel(): number {
    return this._maxLevel;
  }

  set maxLevel(value: number) {
    this._maxLevel = value;
  }

  get text_id(): MyText {
    return this._text_id;
  }

  set text_id(value: MyText) {
    this._text_id = value;
  }

  get style_id(): Style {
    return this._style_id;
  }

  set style_id(value: Style) {
    this._style_id = value;
  }


}
