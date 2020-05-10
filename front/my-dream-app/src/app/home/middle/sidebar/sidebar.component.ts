import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {SideBar} from "../../../model/sideBar";
import {comments} from "./sideBarTamplate/componentData";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  commentsData = comments;


  constructor() {
  }

  ngOnInit(): void {
  }

}


