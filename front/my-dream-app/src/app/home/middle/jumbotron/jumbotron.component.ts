import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContentsServices} from "../../../services/contentsServices";
import {Content} from "../../../contentModel/content";
import {MyText} from "../../../contentModel/myText";
import {MyStyle} from "../../../contentModel/myStyle";

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  private contentName: string = "Jumbotron";
  private content: Content;

  constructor(private contentsServices: ContentsServices) {
    this.content = this.contentsServices.getContentId(this.contentName);
    this.getContentText();
    this.getContentStyle();
  }


  ngOnInit(): void {
    this.content = this.contentsServices.getContentId(this.contentName);
  }
sdf(){

  let person = {name:"Tom", age:23};
// альтернативный вариант получения свойства
}

  getMyStyles(number: number) {
    let name: string = this.getContentStyle()[number].name;
    let parameter: string = this.getContentStyle()[number].parameter;
    let myStyles = {
      'name': parameter,
    };
    return myStyles;
  }


  getContentTemplateNumber(): number {
    return this.content.template_id;
  }

  getContentText(): MyText[] {
    return this.content.text_id;
  }

  getContentStyle(): MyStyle[] {
    return this.content.style_id;
  }


}
