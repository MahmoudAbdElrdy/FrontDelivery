import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryDto, SubCategoryDto } from 'src/app/api/models';
import { CategoryService, SubCategoryService } from 'src/app/api/services';
import { DroubDownModel, ServiceConditionAr, ServiceConditionEn } from '../Enum/enum';
import { UploadServicesService } from '../UploadServices/UploadServices.service';
import {RadioButtonModule} from 'primeng/radiobutton';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class subcategoryComponent implements OnInit {

  itemList: SubCategoryDto[];
  Dialog: boolean=false;
  subcategory: SubCategoryDto=new SubCategoryDto();

  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  CategoryList: any;
  constructor(private SpinnerService: NgxSpinnerService,
    private subcategoryService:  SubCategoryService, private CategoryService:CategoryService,
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
    this.GetAllCategory();
  this.getServiceConditionList();
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.rForm) {
      this.setupForm();
    }
  
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.subcategoryService.apiSubCategoryGetPageGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
    (
      (res) => {
        debugger;
        console.log((res.Data));
       this.itemList = res.Data;
       this.totalRowCount = res.totalRowCount;
       console.log( res);
      },
      err => console.error(err)
    );
  
    this.SpinnerService.hide();
  }
  setupForm() {
    this.rForm = this.fb.group({
      'id':[0],
      'categoryId':[null,Validators.required],
      'subcategoryName': [null, Validators.required]
     
    });
   
  }

  openNew() {
   debugger;
 
    this.rForm.reset();
    this.setupForm();
    this.submitted = false;
    this.Dialog = true;
    this.Update=false;
}
save(){
  if(this.Update==false){
    this.Add();
  }
  else{
this.UpdateDb();
  }
  this.rForm.reset();
  this.Dialog=false;
}
Add() {
  debugger;
 
  if(this.rForm.value.serviceCondition=="Free"){
    this.rForm.value.serviceCondition=1;
  }
  if(this.rForm.value.serviceCondition=="Paid"){
    this.rForm.value.serviceCondition=2;
  }
  let object={body: this.rForm.value};
 
    this.subcategoryService.apiSubCategorySaveNewPost$Json$Response(object).subscribe(
     
      next => { debugger;
        if(next.body.Code==200){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
       
          this.GatAll(); 
        }
        else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});

        }
         } 
         ,
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}
UpdateDb() {
  debugger;
if(this.rForm.value.serviceCondition=="Free"){
  this.rForm.value.serviceCondition=1;
}
if(this.rForm.value.serviceCondition=="Paid"){
  this.rForm.value.serviceCondition=2;
}
  let object={body: this.rForm.value};
 
    this.subcategoryService.apiSubCategoryUpdatePut$Json$Response(object).subscribe(
     
      next => { debugger;
        if(next.body.Code ==200){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:' تم العملية بنجاح'});
       
          this.GatAll();
         }
         else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});

         }
         },
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}
showDialog(item:SubCategoryDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.Id),
      //
      'categoryId':this.fb.control(item.CategoryId),
      'subcategoryName':this.fb.control(item.SubCategoryName)
    });
}

remove(Model){
  debugger;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.subcategoryService.apiSubCategoryDeleteDelete$Json$Response({id:object.id}).subscribe
      (
        res => {
          console.log(res);
          if(res.body.Code ==200){
            this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
         
            this.GatAll(); 
          }
          else{
            this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});
     
          }
        },
        err => console.error(err)
      );
    },
    reject: () => {
      this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
    }
  });
 
}
cancel() {
  this.Dialog=false;

  this.rForm.reset();
}
GetAllCategory(){
   
  this.CategoryService.apiCategoryGetPageGet$Json({pageNumber:0,pageSize:0}).subscribe
  (
    (res) => {
      debugger;
      console.log(("CategoryList:"+this.CategoryList));
     this.CategoryList = res.Data;
     this.CategoryList=this.CategoryList.map( (val)=> { return {label:val.CategoryName,value:val.Id}});
     console.log( res);
    },
    err => console.error(err)
  );

  
}
ServiceConditionList: DroubDownModel[] = [];
getServiceConditionList() {
  debugger
  var keys;
  if(localStorage.getItem('lang')=='ar'){
    keys = Object.keys(ServiceConditionAr);
  }
  else{
    keys = Object.keys(ServiceConditionEn);
  }
  
  var klabel = keys.slice(keys.length / 2);
  var kValue = keys.slice(0, keys.length / 2);
  klabel.forEach(((value, i) => {
    this.ServiceConditionList.push({ label: value, value: +kValue[i] })
  }))

}

}