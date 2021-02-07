import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CommonModule
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import "@angular/compiler"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import "@angular/compiler";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
//import { CustomNgbDateParserFormatter } from './component/datepicker/custom-ngbDateParserFormatter'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NgxSpinnerModule } from "ngx-spinner";
import {MessageService,MenuItem} from 'primeng/api';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { AppConsts } from 'src/AppConsts';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
export function getBaseUrl(): string {
    return AppConsts.baseUrl;
  }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent
    ],
    imports: [NgxSpinnerModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        HttpClientModule,
        NgbModule,
        ToastrModule.forRoot(),
        Ng2SearchPipeModule,
        RouterModule.forRoot(Approutes),
        PerfectScrollbarModule,
        NgMultiSelectDropDownModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8' }),
        TranslateModule.forRoot(),
    ],
    providers: [CookieService,MessageService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
         
        },
     
      //  {provide: NgbDateParserFormatter, useFactory: () => new CustomNgbDateParserFormatter('longDate')}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }


