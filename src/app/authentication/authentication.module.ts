// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NotfoundComponent } from './404/not-found.component';
// import { LockComponent } from './lock/lock.component';
// import { LoginComponent } from './login/login.component';
// import { Login2Component } from './login2/login2.component';
// import { SignupComponent } from './signup/signup.component';
// import { Signup2Component } from './signup2/signup2.component';

// import { AuthenticationRoutes } from './authentication.routing';


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AgmCoreModule } from '@agm/core';
// import { DataTablesModule } from 'angular-datatables';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { ToastrModule } from 'ngx-toastr';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 import {MessageService,MenuItem} from 'primeng/api';
// import {BreadcrumbModule} from 'primeng/breadcrumb';
// import {SlideMenuModule} from 'primeng/slidemenu';
// import {PasswordModule} from 'primeng/password';

// import {DataViewModule} from 'primeng/dataview'
// import {ToastModule} from 'primeng/toast';
// import {PanelModule} from 'primeng/panel';
// import {InputTextModule} from 'primeng/inputtext';
// import {ButtonModule} from 'primeng/button';
// import {DialogModule} from 'primeng/dialog';
// import {DropdownModule} from 'primeng/dropdown';
// import {TabViewModule} from 'primeng/tabview';
// import {AutoCompleteModule} from 'primeng/autocomplete';
// import {CodeHighlighterModule} from 'primeng/codehighlighter';
// import {ScrollPanelModule} from 'primeng/scrollpanel';
// import {OverlayPanelModule} from 'primeng/overlaypanel';
// import {CheckboxModule} from 'primeng/checkbox';
// import {PanelMenuModule} from 'primeng/panelmenu';
// import {MegaMenuModule} from 'primeng/megamenu';
// import { NgxSpinnerModule } from "ngx-spinner";
// import { CookieService } from 'angular2-cookie/services/cookies.service';

// import {TableModule} from 'primeng/table';


// @NgModule({
//   imports: [
//     NgxSpinnerModule,FormsModule,
//     CommonModule,
//     RouterModule.forChild(AuthenticationRoutes),
//     NgbModule,
//     NgxSpinnerModule,
//         BrowserModule,
    
//         HttpClientModule,
//         TableModule,
//         DataViewModule,
//         FormsModule,
//         ToastModule,
//         DataViewModule,
//         PanelModule,
//         DialogModule,
//         DropdownModule,
//         TabViewModule,
//         InputTextModule,
//         ButtonModule,
//         CodeHighlighterModule,
//         BrowserAnimationsModule,
//         AutoCompleteModule,
//         ScrollPanelModule,
//         OverlayPanelModule,
//         CheckboxModule,
//         MegaMenuModule,
//         PasswordModule,
//         BreadcrumbModule,
//         PanelMenuModule,
//         SlideMenuModule,
//         CommonModule,
//         FormsModule,
//         ReactiveFormsModule,
//         DataTablesModule,
//         HttpClientModule,
//         NgbModule,
//         ToastrModule.forRoot(),
//         Ng2SearchPipeModule,
       
//   ],
//   declarations: [
//     NotfoundComponent,
//     LoginComponent,
//     SignupComponent,
//     LockComponent,
//     Login2Component,
//     Signup2Component
//   ],  
//    providers: [MessageService,CookieService ]
// })
// export class AuthenticationModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import "@angular/compiler"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import {ResetPasswordComponent} from './ResetPassword/ResetPassword.component'
import {ToastModule} from 'primeng/toast';
import { AuthenticationRoutes } from './authentication.routing';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [ToastModule, NgxSpinnerModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,FormsModule,ReactiveFormsModule 
  ], 
  providers: [MessageService],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    LockComponent,
    Login2Component,
    Signup2Component,ResetPasswordComponent
  ]
})
export class AuthenticationModule {}
