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

import { TemplateComponent } from './template/template.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {Services} from "./services/services";
import {SideBarDirectiv} from "./directive/SideBarDirectiv";
import { JumbotronComponent } from './home/middle/jumbotron/jumbotron.component';
import {ContentsServices} from "./services/contentsServices";
import {SideBarPipe} from "./pipe/SideBarPipe";
import { CommentsComponent } from './home/middle/sidebar/sideBarTamplate/comments.component';
import { NavBarComponent } from './home/middle/nav-bar/nav-bar.component';


const ContentRoutes: Routes = [
  { path: 'sidebar/:name', component: ContentComponent},
];

const appRoutes: Routes = [
  {path: '', component: HomeComponent,children:ContentRoutes},
  {path: '**', component: HomeComponent},
];

@NgModule({
  declarations: [SideBarDirectiv,SideBarPipe,
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
    TemplateComponent,
    JumbotronComponent,
    CommentsComponent,
    NavBarComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(), BrowserAnimationsModule,
    AccordionModule.forRoot(), FormsModule,
  ],
  providers: [Services,ContentsServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
