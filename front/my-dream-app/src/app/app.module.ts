import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MidleComponent} from './home/midle/midle.component';
import {FooterComponent} from './home/footer/footer.component';
import {HeaderComponent} from './home/header/header.component';
import {CarouselComponent} from './home/midle/carousel/carousel.component';
import {SidebarComponent} from './home/midle/sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {ContentComponent} from './home/midle/content/content.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MidleComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
