import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import {TranslateService} from '@ngx-translate/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'app-full-layout',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
    public config: PerfectScrollbarConfigInterface = {};

    constructor(public router: Router,private translate: TranslateService) {
        translate.addLangs(['en','ar']);
      //  localStorage.setItem("lang",'ar')
      
     }
    
    tabStatus = 'justified';

    public isCollapsed = false;

    public innerWidth: any;
    public defaultSidebar: any;
    public showSettings = false;
    public showMobileMenu = false;
    public expandLogo = false;
public direction:any;
    options = {
        theme: 'light', // two possible values: light, dark
        dir: localStorage.getItem("direction"), // two possible values: ltr, rtl
        layout: 'vertical', // fixed value. shouldn't be changed.
        sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
        sidebarpos: 'fixed', // two possible values: fixed, absolute
        headerpos: 'fixed', // two possible values: fixed, absolute
        boxed: 'full', // two possible values: full, boxed
        navbarbg: 'skin1', // six possible values: skin(1/2/3/4/5/6)
        sidebarbg: 'skin5', // six possible values: skin(1/2/3/4/5/6)
        logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
    };

    Logo() {
        this.expandLogo = !this.expandLogo;
    }

    ngOnInit() {
      
    this.direction=localStorage.getItem("direction");
 
        if (this.router.url === '/') {
            this.router.navigate(['/Home']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
       this.translate.setDefaultLang('ar');
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.handleSidebar();
    }

    handleSidebar() {
       
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                } else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;

            case 'overlay':
                if (this.innerWidth < 767) {
                    this.options.sidebartype = 'mini-sidebar';
                } else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;

            default:
        }
    }

    toggleSidebarType() {
       
        switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;

            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;

            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this.options.sidebartype = 'full';
                } else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;

            default:
        }
    }
    change(){
      
       if (this.direction=='rtl'){
        localStorage.setItem("lang",'en')
        this.translate.setDefaultLang('en');
        this.direction='ltr';
        localStorage.setItem("direction",this.direction)
       window.location.href = '/Home';
     // this.router.navigate(['/Store/Home']);
        return;
       }
       if (this.direction=='ltr'){
        localStorage.setItem("lang",'ar')
        this.translate.setDefaultLang('ar');
        this.direction='rtl';
        localStorage.setItem("direction",this.direction)
        window.location.href = '/Home';
      // this.router.navigate(['/Store/Home']);
        return;
       }
        // if (this.options.dir=='rtl') {
        //     this.translate.setDefaultLang('en');
        //     this.options.dir=='rtl';
         
        //    window.location.href = '/Store/Home';
        //    localStorage.setItem("lang",'en')
        //  }
        //  else{
        //     this.translate.setDefaultLang('ar');
          
        //     window.location.href = '/Store/Home';
           
        //     this.options.dir=='ltr';
        //      localStorage.setItem("lang",'ar')
        //  } 
    }
}
