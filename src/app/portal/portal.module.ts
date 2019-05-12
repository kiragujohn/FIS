import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule, BsDatepickerModule, CarouselModule, TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { EqualValidator } from './directive/equalvalidator.directive';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal.routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TimepickerModule } from 'ngx-bootstrap';

export function HttpLoaderFactory(http: HttpClient) {

}

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    TimepickerModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    PortalRoutingModule,
    NgbModalModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        throwNoTokenError: false,
        tokenGetter,
        whitelistedDomains: ['localhost:8080']
      }
    }),
  ],
  exports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, PortalComponent, EqualValidator
  ],

  providers: [
  ]
})

export class PortalModule {

  constructor() {
  }
}
