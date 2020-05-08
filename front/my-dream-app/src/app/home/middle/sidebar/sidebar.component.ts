import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {SideBar} from "../../../contentModel/sideBar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  @Input() sideBar: SideBaring[];

  str: number= 5;
  level: number[]=[1,2,3,4,5];

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface SideBaring {
  id: number;
  name: string;
  level: number;
  parent_Id: number;
}

