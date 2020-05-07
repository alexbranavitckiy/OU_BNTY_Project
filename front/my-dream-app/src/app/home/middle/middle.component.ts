import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideBaring} from "./sidebar/sidebar.component";

@Component({
  selector: 'app-midle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {


  sideB: SideBaring[];
  nomer:number;
  sizzw:string;
  sizzw2:string;


  constructor() {
  }

  ngOnInit(): void {
    this.sideB = [
      {id: 0, name: "Руководство института", level: true, parent_Id: 0},
      {id: 1, name: "Да или нет", level: true, parent_Id: 0},
      {id: 2, name: "Ты солдат", level: true, parent_Id: 0},
      {id: 3, name: "Мы все умрем", level: true, parent_Id: 0},
      {id: 4, name: "Я не здамся без боя", level: true, parent_Id: 1},
      {id: 5, name: "Руководство института", level: true, parent_Id: 2},
      {id: 6, name: "Руководство института", level: true, parent_Id: 3},
      {id: 7, name: "Руководство института", level: true, parent_Id: 4}]
  }


}
