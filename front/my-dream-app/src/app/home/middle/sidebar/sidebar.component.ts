import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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


cliCk(no :number){

   let mass: boolean[];
    for (let x=0;x<no;x++){

    }
}



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

