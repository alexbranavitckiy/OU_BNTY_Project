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
  name: any;

  constructor(private route: ActivatedRoute, private contentsServices: ContentsServices) {
    this.subscription = route.params.subscribe(params => {
      this.message = params['name'];
      console.log(this.message);
    });
    //  this.subscriptionMessage = this.contentsServices.getMessage().subscribe(message => {
    //       this.message = message;
    //     });

  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

