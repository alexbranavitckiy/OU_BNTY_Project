import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ContentsServices} from "../../../services/contentsServices";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  private subscriptionMessage: Subscription;
  private subscription: Subscription;

  message: any;


  constructor( private contentsServices: ContentsServices) {
//    this.subscription = route.params.subscribe(params=>this.name=params['name']); private route: ActivatedRoute,   name:any;
    this.subscriptionMessage = this.contentsServices.getMessage().subscribe(message => {
      this.message = message;
    });
  }



  ngOnInit() {
    this.message = '';
  }

  ngOnDestroy() {
    this.subscriptionMessage.unsubscribe();
  }
}

