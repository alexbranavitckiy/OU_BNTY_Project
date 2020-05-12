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

  private name: string;
  private subscription: Subscription;
  private subscriptionMessage: Subscription;
  message: any;


  constructor(private route: ActivatedRoute, private contentsServices: ContentsServices) {
    this.subscription = route.params.subscribe(params=>this.name=params['name']);
    this.subscriptionMessage = this.contentsServices.getMessage().subscribe(message => { this.message = message;
    });
  }

  getName(): string {
    return this.name;
  }


  ngOnInit() {
    this.message='';

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.subscriptionMessage.unsubscribe();
  }
}

