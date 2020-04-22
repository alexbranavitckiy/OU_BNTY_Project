import {Component, Input, OnInit} from '@angular/core';
import {Texting} from "../model/texting";
import {Style} from "@angular/cli/lib/config/schema";
import {Styles} from "../model/styles";

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
  }





  text: Texting[] = [new Texting(1, "Институт объединяет в своем составе:", null, 1)
    , new Texting(2, "кафедру «Естественнонаучные и творческие дисциплины»;", null, 1),
    new Texting(3, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, 1), new Texting(4, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, 1), new Texting(5, "региональный центр тестирования и профессиональной ориентации учащейся молодежи;",
      null, 1)];

  ngOnInit(): void {
  }

}
