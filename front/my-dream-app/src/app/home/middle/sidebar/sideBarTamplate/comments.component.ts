import {Component, Input, OnInit} from '@angular/core';
import {SideBarModel} from "../../../../model/sideBarModel";
import {ContentsServices} from "../../../../services/contentsServices";
import {Router} from "@angular/router";


@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments;

  constructor(private  contentsServices: ContentsServices,private router:Router) {
  }

  ngOnInit(): void {
  }

  flagTurn(comments: SideBarModel) {
   // let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
    this.router.navigateByUrl('sidebar/'+comments.router_link);
    comments.flag = !comments.flag;
 //   this.contentsServices.sendMessage(comments.router_link);
  }

  flagStyle(flag: boolean) {
    return !flag;
  }

}

