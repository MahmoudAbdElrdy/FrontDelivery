import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES, ROUTESAr } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    showMenu = '';
    showSubMenu = '';
    public isCollapsed = true;
    public sidebarnavItems: any[];
    // this is for the open close
    addExpandClass(element: any) {
        debugger;
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }

    }
    addActiveClass(element: any) {
        debugger;
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        } else {
            this.showSubMenu = element;
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private route: ActivatedRoute,
        private translate: TranslateService
    ) { }

    // End open close
    ngOnInit() {
       debugger;
       this.translate.addLangs(['en','ar']);
        var lang=localStorage.getItem('lang');
      //  lang=='ar';
       
      
        if(lang=='ar'){
            this.translate.setDefaultLang('ar');
            this.sidebarnavItems = ROUTESAr.filter(sidebarnavItem => sidebarnavItem);
        }
          else{
            this.translate.setDefaultLang('en');
            this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
                }
         
           
        }
        
      
       
       
    }

