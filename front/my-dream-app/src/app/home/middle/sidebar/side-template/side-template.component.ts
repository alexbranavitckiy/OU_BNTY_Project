import {Component, Input, OnInit} from '@angular/core';
import {SideBar} from "../../../../contentModel/sideBar";

@Component({
  selector: 'app-side-template',
  templateUrl: './side-template.component.html',
  styleUrls: ['./side-template.component.scss']
})
export class SideTemplateComponent implements OnInit {


  @Input() sideBar:SideBar[];


  constructor() { }

  ngOnInit(): void {
    console.log(this.sideBar);
  }


  click1: boolean = true;
  click2: boolean = true;
  click3: boolean = true;
  click4: boolean = true;

  clickSelection1() {
    this.click1 = !this.click1;
    if (this.click2==false)     this.click2 = !this.click2;

  }
  clickSelection2() {
    this.click2 = !this.click2;
    if (this.click3==false)     this.click3 = !this.click3;
  }
  clickSelection3() {
    this.click3 = !this.click3;
    if (this.click4==false)     this.click4 = !this.click4;
  }
  clickSelection4() {
    this.click4 = !this.click4;
  }
}
