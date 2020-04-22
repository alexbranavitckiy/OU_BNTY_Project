import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideBar} from "../../../model/sideBar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  sideBaring: SideBar[] = [new SideBar(0, 1, "name1", 1, true),
    new SideBar(0, 2, "name2", 1, true),
    new SideBar(0, 3, "name3", 1, true),
    new SideBar(0, 4, "name4", 1, true),
    new SideBar(0, 5, "name5", 1, true),
    new SideBar(1, 6, "name6_1", 2, true),
    new SideBar(1, 7, "name7_1", 2, true),
    new SideBar(2, 8, "name8_2", 2, true),
    new SideBar(6, 9, "name10_2", 2, true),
    new SideBar(7, 9, "name11_2", 2, true),
    new SideBar(8, 9, "name92_2", 2, true),
    new SideBar(7, 9, "name90_2", 2, true),
    new SideBar(4, 9, "name914_2", 2, true)
  ];





  click1: boolean = true;
  click2: boolean = true;
  click3: boolean = true;
  click4: boolean = true;

  clickSelection1() {
    this.click1 = !this.click1;
  }
  clickSelection2() {
    this.click2 = !this.click2;
  }
  clickSelection3() {
    this.click3 = !this.click3;
  }
  clickSelection4() {
    this.click4 = !this.click4;
  }


}

