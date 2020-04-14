import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-midle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {



  nomer:number;
  sizzw:string;
  sizzw2:string;

  hg():string{
    return '"'+this.sizzw+'"'
  }
  constructor() {
  }

  ngOnInit(): void {
  }


}
