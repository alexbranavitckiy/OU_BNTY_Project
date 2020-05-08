import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideBaring} from "./sidebar/sidebar.component";
import {comments} from "./sidebar/comments/componentData";

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
      {id: 0, name: "Руководство института", level: 1, parent_Id: 0},
      {id: 1, name: "Да или нет", level: 0, parent_Id: 0},
      {id: 2, name: "Ты солдат", level: 0, parent_Id: 0},
      {id: 3, name: "Мы все умрем", level: 3, parent_Id: 0},
      {id: 4, name: "Я не здамся без боя", level: 1, parent_Id: 1},
      {id: 5, name: "Руководство jaj", level: 2, parent_Id: 2},
      {id: 6, name: "2332 института", level: 1, parent_Id: 3},
      {id: 7, name: "Руководство института", level: 3, parent_Id: 4},
      {id: 8, name: "Я не здамся без боя", level: 4, parent_Id: 1},
      {id: 9, name: "Руководство 23", level: 1, parent_Id: 2},
      {id: 10, name: "Руководство jaj2", level: 2, parent_Id: 3},
      {id: 11, name: "Руководство ", level: 3, parent_Id: 4},
      {id: 12, name: "Я не  без боя", level: 1, parent_Id: 1},
      {id: 13, name: " института", level: 2, parent_Id: 2},
      {id: 14, name: "Руководство 22", level: 3, parent_Id: 3},
      {id: 15, name: "Руководство 656566", level: 1, parent_Id: 4}]
  }

  commentsData = comments;
}
