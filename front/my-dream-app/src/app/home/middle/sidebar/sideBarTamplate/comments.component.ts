import {Component, Input, OnInit} from '@angular/core';
import {SideBarModel} from "../../../../model/sideBarModel";
import {ContentsServices} from "../../../../services/contentsServices";


@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments;

  constructor(private  contentsServices: ContentsServices) {
  }

  ngOnInit(): void {
  }

  flagTurn(comments: SideBarModel) {
    comments.flag = !comments.flag;
    this.contentsServices.sendMessage(comments.router_link);
  }

  flagStyle(flag: boolean) {
    return !flag;
  }

}

