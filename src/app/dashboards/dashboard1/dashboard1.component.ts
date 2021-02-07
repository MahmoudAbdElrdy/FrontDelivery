import { Component, AfterViewInit, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { NgxSpinnerService } from "ngx-spinner"
import { MessageService } from 'primeng/api';
import { IdentityService } from 'src/app/api/services';
@Component({
  selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  NumberRows:any;
  home: MenuItem;
  items: MenuItem[];
     constructor(  private messageService: MessageService,private User:IdentityService,public router: Router,private translate: TranslateService,  private spinner: NgxSpinnerService) {
       
      //  this.onSubmit();
        translate.addLangs(['en','ar']);
         var lang=localStorage.getItem('lang');
        // this.translate.setDefaultLang('ar');
        // localStorage.setItem("direction",'rtl')
        if(lang=='ar'){
          
           // window.location.href = '/dashboard/dashboard1';
            this.translate.setDefaultLang('ar');
            localStorage.setItem("direction",'rtl')
           // window.location.reload();
        }
        
        if(lang=="null" ||lang==null){
         
            // window.location.href = '/dashboard/dashboard1';
             this.translate.setDefaultLang('en');
             localStorage.setItem("direction",'ltr')
             localStorage.setItem("lang",'en')
            // window.location.reload();
         }
        if(lang=='en'){
            //window.location.href = '/dashboard/dashboard1';
            this.translate.setDefaultLang('en');
            localStorage.setItem("direction",'ltr')
           // window.location.reload();
        }
       
      
       
      }
  ngOnInit() {
   
  }
    
    OnInit() {
      //  this.translate.setDefaultLang('ar');
     
     }
}
