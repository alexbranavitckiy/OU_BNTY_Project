import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "./componentData";

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments;

  constructor() {
  }

  ngOnInit(): void {
  }

  flagTurn(comments: Comment) {
    comments.flag = !comments.flag;
  }

  flagStyle(flag:boolean){
    return !flag;
  }

}

