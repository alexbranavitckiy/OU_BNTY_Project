import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContentsServices} from "../../../services/contentsServices";
import {Content} from "../../../model/content";
import {MyText} from "../../../model/myText";
import {MyStyle} from "../../../model/myStyle";

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
