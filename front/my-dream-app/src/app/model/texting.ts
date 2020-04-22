import {Style} from "@angular/cli/lib/config/schema";








export class Texting {
  private _id_number; // номер текст, расставляется по поядку
  private _text: string; // сам текст
  private _styles: Style; // стили текста
  private _template_number: number; // номер шаблона


  constructor(id_number, text: string, styles: Style, template_number: number) {
    this._id_number = id_number;
    this._text = text;
    this._styles = styles;
    this._template_number = template_number;
  }

  get id_number() {
    return this._id_number;
  }

  set id_number(value) {
    this._id_number = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get styles(): Style {
    return this._styles;
  }

  set styles(value: Style) {
    this._styles = value;
  }

  get template_number(): number {
    return this._template_number;
  }

  set template_number(value: number) {
    this._template_number = value;
  }
}





