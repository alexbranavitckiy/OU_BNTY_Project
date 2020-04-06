import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MiddleComponent} from './home/middle/middle.component';
import {FooterComponent} from './home/footer/footer.component';
import {HeaderComponent} from './home/header/header.component';
import {CarouselComponent} from './home/middle/carousel/carousel.component';
import {SidebarComponent} from './home/middle/sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {AccordionComponent, AccordionModule, BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {ContentComponent} from './home/middle/content/content.component';
import { FooterTopComponent } from './home/footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './home/footer/footer-bottom/footer-bottom.component';

import { FormEntryComponent } from './form/form-entry/form-entry.component';
import { FormSearchComponent } from './form/form-search/form-search.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiddleComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    ContentComponent,
    FooterTopComponent,
    FooterBottomComponent,
    FormEntryComponent,
    FormSearchComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),  BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
