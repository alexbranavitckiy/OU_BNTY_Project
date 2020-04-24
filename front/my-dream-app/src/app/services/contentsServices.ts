import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Content} from "../contentModel/content";
import {MyText} from "../contentModel/myText";
import {MyStyle} from "../contentModel/myStyle";
import {Service} from "./service";


@Injectable({providedIn: 'root'})
export class ContentsServices implements Service{


  constructor(private http: HttpClient) {
  }

  add(body: any) {
  }

  edit(body: any) {
  }

  getAll() {
  }

  getId(id: any) {
  }

  removeId(id: any) {
  }



  addContent(content: Content) {
  }


  removeContentId(id: string) {
  }

  editContent(content: Content) {
  }

  getAllContent() {
  }

  texts: MyText[] = [new MyText(1, "Заголовок"),
    new MyText(2, "— это практические курсы для учащихся, желающих" +
      " расширить свой кругозор, постичь основы архитектуры и дизайна."),
    new MyText(3, "Name"), new MyText(4, "Мде")]

  style: MyStyle[] = [new MyStyle(1, "color:black", "")];
  contents: Content = new Content("1", this.texts, this.style, 1);


  getContentId(name_id: string): Content {
    console.log(name_id);
    return this.contents;
  }


}
