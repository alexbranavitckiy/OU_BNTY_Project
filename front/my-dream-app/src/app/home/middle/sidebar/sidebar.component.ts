import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {SideBar} from "../../../contentModel/sideBar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  @Input() sideBar: SideBaring[];

  sideB: SideBaring[];

  constructor() {
  }

  ngOnInit(): void {
    if (this.sideBar != undefined) {
      this.sideB = this.sideBar;
    } else {
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

  mass: SideBaring[] = [];
  flagIdPrevious: number;

  trackByFn(trackBy, item) {
    return item.id;
  }

  click(id: number) {
    if (this.flagIdPrevious === undefined || this.flagIdPrevious != id) {
      this.flagIdPrevious = id;
      this.mass = [];
      for (let x = 0; x < this.sideB.length; x++) {
        if (this.sideB[x].level === false) {
          this.setFlagOpen(this.sideB[x]);
        }
        if (this.sideB[x].parent_Id === id) {
          this.mass.push(this.sideB[x]);
        }
      }
      if (this.mass.length > 0) {
        this.setFlagOpen(this.sideB[id]);
      }
    } else {
      this.setFlagOpen(this.sideB[id]);
    }
  }

  setFlagOpen(mass: SideBaring) {
    mass.level = !mass.level;
  }

}

export interface SideBaring {
  id: number;
  name: string;
  level: boolean;
  parent_Id: number;
}



