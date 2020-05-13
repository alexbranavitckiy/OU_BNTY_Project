import { Component, OnInit } from '@angular/core';
import {ContentsServices} from "../../../services/contentsServices";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private contentsServices:ContentsServices) { }

  ngOnInit(): void {
  }

  setContent(link:any){
    this.contentsServices.sendMessage(link)
  }

}
