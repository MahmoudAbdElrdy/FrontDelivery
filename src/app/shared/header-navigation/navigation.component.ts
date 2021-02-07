import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
    NgbModal,
    ModalDismissReasons,
    NgbPanelChangeEvent,
    NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
    //@Output() toggleSidebar = new EventEmitter<void>();

    public config: PerfectScrollbarConfigInterface = {};

    public showSearch = false;
    direction: string;
    NumberRows:any;
   
    Result:any[];
Language:any;
    constructor(private modalService: NgbModal,private router:Router,private translate: TranslateService) { 
       this.UserName=localStorage.getItem("UserName");
     
       translate.addLangs(['en','ar']);
       var lang=localStorage.getItem('lang');
       
       if(lang=='ar'){
        
          // window.location.href = '/dashboard/dashboard1';
           this.translate.setDefaultLang('ar');
           localStorage.setItem("direction",'rtl')
          // window.location.reload();
          this.Language="English";
       }
       
       if(lang=="null" ||lang==null){
        
           // window.location.href = '/dashboard/dashboard1';
            this.translate.setDefaultLang('en');
            localStorage.setItem("direction",'ltr')
            localStorage.setItem("lang",'en');
           
           // window.location.reload();
        }
       if(lang=='en'){
           //window.location.href = '/dashboard/dashboard1';
           this.translate.setDefaultLang('en');
           localStorage.setItem("direction",'ltr')
          // window.location.reload();
          this.Language="عربي";
       }
      
       
       
     
    }
    logout(){
        localStorage.removeItem('UserName');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem("direction")
        localStorage.removeItem("lang");
        this.router.navigate(['/login']);
    }
     UserName:any;
    // This is for Notifications
    notifications: Object[] = [
        {
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
        },
        {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
        },
        {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
        },
        {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
        }
    ];

    // This is for Mymessages
    mymessages: Object[] = [
        {
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
        },
        {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
        },
        {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
        },
        {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
        }
    ];
  
    change(){
       
        this.direction=localStorage.getItem("direction");
        if (this.direction=='rtl'){
         localStorage.setItem("lang",'en')
         this.translate.setDefaultLang('en');
         this.direction='ltr';
         localStorage.setItem("direction",this.direction)
        window.location.href = '/Home';
      // this.router.navigate(['/Home']);
         return;
        }
        if (this.direction=='ltr'){
         localStorage.setItem("lang",'ar')
         this.translate.setDefaultLang('ar');
         this.direction='rtl';
         localStorage.setItem("direction",this.direction)
         window.location.href = '/Home';
       // this.router.navigate(['/Home']);
         return;
        }
         
     }
    ngAfterViewInit() { }
}
