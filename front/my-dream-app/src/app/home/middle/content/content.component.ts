import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  name: string;
  nameTemplate:string='Институт';
  private routeSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSubscription = activatedRoute.params.subscribe(params => this.name = params['name']);
  }

  ngOnInit(): void {
  }

}


