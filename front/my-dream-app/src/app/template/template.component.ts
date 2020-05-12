import {Component, Input, OnInit} from '@angular/core';
import {MyText} from "../model/myText";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @Input() templateNumber: number;
  @Input() sizzw: string;
  @Input() sizzw2: string;



  constructor() {
    this.templateNumber=1;
  }



  text: MyText[] = [new MyText(1, "Институт объединяет в своем составе:", null, )
    , new MyText(2, "кафедру «Естественнонаучные и творческие дисциплины»;", null, ),
    new MyText(3, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, ), new MyText(4, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, ), new MyText(5, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, )];

  ngOnInit(): void {
  }

}
