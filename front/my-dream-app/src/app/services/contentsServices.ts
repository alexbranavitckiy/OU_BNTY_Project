import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Content} from "../model/content";
import {MyText} from "../model/myText";
import {MyStyle} from "../model/myStyle";
import {Observable, Subject} from "rxjs";


@Injectable({providedIn: 'root'})
export class ContentsServices {

  private massIdContent: number[];

  private subject = new Subject<any>();

  constructor(private http: HttpClient) {

  }

  sendMessage(router_link?: any): void {
    if (router_link != undefined) {
      this.subject.next({text: router_link});
    }
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  getContentId(name_id: string): Content {
    return this.contents;
  }

  texts: MyText[] = [new MyText(1, "Заголовок"),
    new MyText(2, "— это практические курсы для учащихся, желающих" +
      " расширить свой кругозор, постичь основы архитектуры и дизайна."),
    new MyText(3, "Name"), new MyText(4, "Мде")]
  style: MyStyle[] = [new MyStyle(1, "color:black", "")];
  contents: Content = new Content("1", this.texts, this.style, 1);

}
