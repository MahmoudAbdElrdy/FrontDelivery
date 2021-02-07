import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryDto } from 'src/app/api/models';
import{CategoryService} from 'src/app/api/services'
import { UploadServicesService } from '../UploadServices/UploadServices.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  itemList: CategoryDto[];
  Dialog: boolean=false;

  Category: CategoryDto=new CategoryDto();

  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  constructor(private SpinnerService: NgxSpinnerService,
    private CategoryService: CategoryService, 
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
 
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
    this.CategoryService.apiCategoryGetPageGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
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
      
      'categoryName': [null, Validators.required],
      
     
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
 
 
  let object={body: this.rForm.value};
 
    this.CategoryService.apiCategorySaveNewPost$Json$Response(object).subscribe(
     
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
 
  let object={body: this.rForm.value};
 
    this.CategoryService.apiCategoryUpdatePut$Json$Response(object).subscribe(
     
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
showDialog(item:CategoryDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.Id),
      //
      
      'categoryName':this.fb.control(item.CategoryName),
     
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
      this.CategoryService.apiCategoryDeleteDelete$Json$Response({id:object.id}).subscribe
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
openid(id){
  debugger;
  this.router.navigate(['SubCategory', { id: id }]);
}


}