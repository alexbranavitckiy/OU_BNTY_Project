import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {SideBar} from "../../../model/sideBar";
import {comments} from "./sideBarTamplate/componentData";
import {SideBarModel} from "../../../model/sideBarModel";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  private _commentsData = comments;


  constructor() {
  }


  ngOnInit(): void {
  }

  get commentsData(): SideBarModel[] {
    return this._commentsData;
  }

  set commentsData(value: SideBarModel[]) {
    this._commentsData = value;
  }

}


