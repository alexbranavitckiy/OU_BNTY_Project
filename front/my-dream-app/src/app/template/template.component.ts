import {Component, Input, OnInit} from '@angular/core';
import {ServiceHttp} from "../serviceHttp/ServiceHttp";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @Input() templateNumber: number;
  @Input() sizzw: string;
  @Input() sizzw2: string;


  mass: string[] = [" <ul class=\"card-text\">  <li>кафедру «Естественнонаучные и творческие дисциплины»;</li>" +
  " <li> региональный центр тестирования и профессиональной ориентации учащейся молодежи;</li>" +
  "   <li> лицей БНТУ;</li>    <li> подготовительные курсы;</li>  " +
  "     <li> подготовительное отделение;</li> " +
  " <li> отдел профориентационной работы;</li> " +
  "  <li> отдел мониторинга качества образования.</li>" +
  "      </ul>"];


  flag: boolean = true;

  constructor(private htp: ServiceHttp) {
  }

  ngOnInit(): void {
    console.log(this.htp.getS());
  }

}
