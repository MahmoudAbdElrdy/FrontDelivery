
// import { Component, AfterViewInit,OnInit } from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';
// import { Router } from '@angular/router';
// import { SecurityService } from 'src/api/services/security.service';
// import { MenuItem } from 'primeng/api/menuitem';
// @Component({
//   selector: 'app-Mega',
//     templateUrl: './Mega.component.html',
//     styleUrls: ['./Mega.component.css']
// })
// export class MegaComponent implements OnInit {
//   NumberRows:any;
//   home: MenuItem;
//   items: MenuItem[];
//   Result:any[];
//   ToastrMsg: any;
//   Item: any;
//   ItemsCount: any;
//   ItemCategoriesCount: any;
//   ItemTypesCount: any;
//   ItemClassesCount: any;
//   ItemPackagesCount: any;
//   Extensionscount: any;
//   ItemUnitsOfMeasureCount: any;
//   CashiersCount: any;
//   ReceiptsCount: any;
//   RegistersCount: any;
//   Price_Tiers: any;
//   Salesmen: any;
//   Units_Of_Measure: any;
//   Taxes: any;
//   Reasons: any;
//   Customers: any;
//   Taxe_Profiles: any;
//   BarCodes: any;
//   Batches: any;
//   Card_Machines: any;
//   Coupons: any;
//   Currencies: any;
//   Discounts: any;
//   Extensions: any;
//   Extension_Values: any;
//     constructor(private Service: SecurityService,public router: Router,private translate: TranslateService) {
//         debugger;
//         translate.addLangs(['en','ar']);
//         var lang=localStorage.getItem('lang');
//         if(lang=='ar'){
          
//           // window.location.href = '/dashboard/dashboard1';
//           translate.setDefaultLang('ar');
//            localStorage.setItem("direction",'rtl')
//           // window.location.reload();
//        }
       
//        if(lang=="null" ||lang==null){
//          debugger;
//            // window.location.href = '/dashboard/dashboard1';
//             translate.setDefaultLang('en');
//             localStorage.setItem("direction",'ltr')
//             localStorage.setItem("lang",'en')
//            // window.location.reload();
//         }
//        if(lang=='en'){
//            //window.location.href = '/dashboard/dashboard1';
//            translate.setDefaultLang('en');
//            localStorage.setItem("direction",'ltr')
//           // window.location.reload();
//        }
//        //this.Item=this.translate.instant('Book.asd')
      
//        // this.NumberRows=JSON.parse(localStorage.getItem("RowsTable")) ;
//        this.NumberRows=JSON.parse(localStorage.getItem("RowsTable")) ;
//         if(this.NumberRows!=0||this.NumberRows.length>0||this.NumberRows!=null){
//           console.log(this.NumberRows);
//           this.ItemsCount=this.NumberRows[28].RowCounts;
//           this.ItemCategoriesCount=this.NumberRows[19].RowCounts;
//           this.ItemTypesCount=this.NumberRows[26].RowCounts;
//           this.ItemClassesCount=this.NumberRows[20].RowCounts;
//           this.ItemPackagesCount=this.NumberRows[24].RowCounts;
//           this.Extensionscount=this.NumberRows[18].RowCounts;
//           this.ItemUnitsOfMeasureCount=this.NumberRows[27].RowCounts;
//           //milstones 2 
//           this.CashiersCount=this.NumberRows[9].RowCounts;
//           this.ReceiptsCount=this.NumberRows[42].RowCounts;
//           this.RegistersCount=this.NumberRows[48].RowCounts;
//           //milstones 3""
//           this.Price_Tiers=this.NumberRows[31].RowCounts;
//           this.Salesmen=this.NumberRows[49].RowCounts;
//           this.Units_Of_Measure=this.NumberRows[63].RowCounts;
//           this.Taxes=this.NumberRows[53].RowCounts;
//           this.Reasons=this.NumberRows[34].RowCounts;
//           this.Customers=this.NumberRows[15].RowCounts;
//           this.Taxe_Profiles=this.NumberRows[52].RowCounts;
//           this.BarCodes=this.NumberRows[5].RowCounts;
//           this.Batches=this.NumberRows[6].RowCounts;
//           this.Card_Machines=this.NumberRows[7].RowCounts;
//           this.Coupons=this.NumberRows[10].RowCounts;
//           this.Currencies=this.NumberRows[11].RowCounts;
//           this.Discounts=this.NumberRows[16].RowCounts;
//           this.Extensions=this.NumberRows[18].RowCounts;
//           this.Extension_Values=this.NumberRows[17].RowCounts;
//         }
//         // translate.get(['HOME', 'MY_ACCOUNT', 'CHANGE_PASSWORD']).subscribe(translations => {
//         //   this.pages= [
//         //     { title: translations.HOME, component: HomePage},
//         //     { title: translations.MY_ACCOUNT, component: MyAccountPage},
//         //     { title: translations.CHANGE_PASSWORD, component: ChangePasswordPage}
//         //   ];
//         // })
    
//       }
//     ngOnInit() {
//     this.translate.get(['Item']).subscribe(translations=>{
//       debugger;
//       this.Item=translations.Item
//     });
//       //  this.translate.setDefaultLang('ar');
    
//      }
//      ToastrMsgTranslate(Msg:string)
//      {debugger;
//        this.translate.get([Msg] )
//        .subscribe((translations:string) => {
//          this.ToastrMsg = translations[Msg];
//        });
//        return this.ToastrMsg ;
//      }
// }
