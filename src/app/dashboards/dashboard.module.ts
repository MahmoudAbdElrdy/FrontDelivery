import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import "@angular/compiler"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { TableService } from './dashboard-components/manage-user-table/ManageUserTable.service';
import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';

import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {MessageService,MenuItem, ConfirmationService} from 'primeng/api';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SlideMenuModule} from 'primeng/slidemenu';
import {PasswordModule} from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import {DataViewModule} from 'primeng/dataview'
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { ToolbarModule } from 'primeng/toolbar';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {CheckboxModule} from 'primeng/checkbox';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";  
import { AuthGuard } from './auth-guard';
import { UploadServicesService } from './UploadServices/UploadServices.service';
import { CategoryComponent } from './category/category.component';
import { PaginatorModule } from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { subcategoryComponent } from './subcategory/subcategory.component';
import { IdentityService, SubCategoryService } from 'src/app/api/services';
import { RolesMangerComponent } from './roles-manger/roles-manger.component';
import { UsersMangerComponent } from './users-manger/users-manger.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    imports: [ NgxSpinnerModule,
        FormsModule,ReactiveFormsModule ,
        ToolbarModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        RouterModule.forChild(DashboardRoutes),
        PerfectScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ChartModule,
        NgxChartsModule,
        NgxDatatableModule,
        TableModule,
        DataViewModule,
        FormsModule,
        ToastModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        CodeHighlighterModule,
       // BrowserAnimationsModule,
        AutoCompleteModule,
        ScrollPanelModule,
        OverlayPanelModule,
        CheckboxModule,
        MegaMenuModule,
        PasswordModule,
        BreadcrumbModule,
        PanelMenuModule,
        SlideMenuModule,PaginatorModule,ConfirmDialogModule,RadioButtonModule,RatingModule
    ],
    declarations: [	
        Dashboard1Component, CategoryComponent,subcategoryComponent, RolesMangerComponent,UsersMangerComponent  ],
    providers: [//TableService
        UploadServicesService,AuthGuard,ConfirmationService,SubCategoryService,IdentityService
    ]
})
export class DashboardModule { }
  