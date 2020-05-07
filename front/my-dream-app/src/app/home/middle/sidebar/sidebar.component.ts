import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {SideBar} from "../../../contentModel/sideBar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  @Input() sideBar: SideBaring[];



  constructor() {
  }

  ngOnInit(): void {


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
      for (let x = 0; x < this.sideBar.length; x++) {
        if (this.sideBar[x].level === false) {
          this.setFlagOpen(this.sideBar[x]);
        }
        if (this.sideBar[x].parent_Id === id) {
          this.mass.push(this.sideBar[x]);
        }
      }
      if (this.mass.length > 0) {
        this.setFlagOpen(this.sideBar[id]);
      }
    } else {
      this.setFlagOpen(this.sideBar[id]);
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



