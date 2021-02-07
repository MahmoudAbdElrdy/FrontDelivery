import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Permission } from 'src/app/api/models';
import { IdentityService } from 'src/app/api/services';

@Component({
  selector: 'app-roles-manger',
  templateUrl: './roles-manger.component.html',
  styleUrls: ['./roles-manger.component.css']
})
export class RolesMangerComponent implements OnInit {
  
  PermissionList: any [] = [];
  ageFGs: FormGroup[];
  itemList: Permission[];
  Dialog: boolean=false;

  Identity: Permission=new Permission();

  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  age: { ageID: number; description: string; isSelected: boolean; }[];
  constructor(private SpinnerService: NgxSpinnerService,
    private IdentityService: IdentityService, 
 private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
   getData(){
    {
      this.PermissionList = [
        {
          "id": 1,
          "name": 'ادارة البيانات العامة'
        },
        {
          "id": 2,
          "name": ' لوحة تحكم المدير '
        
        },
        {
          "id": 3,
          "name": ' لوحة صلاحيات المدراء '
        
        },
        {
          "id": 4,
          "name": ' اضافة الاقسام الرئيسية والفرعية  '
        
        },
        {
          "id": 5,
          "name": ' ادارة حسابي مقدمي الخدمة '
        
        },
        {
          "id": 6,
          "name": ' ادارة حسابي مقدمي الخدمة '
        
        },
        {
          "id": 7,
          "name": 'ادارة حسابات الاعضاء  '
        
        },
        {
          "id": 8,
          "name": ' ادارة تقارير التطبيق  '
        
        },
        {
          "id": 9,
          "name": ' ادارة سياسة التطبيق  '
        
        },
        {
          "id": 10,
          "name": 'ادارة معلومات التواصل '
        
        },
        {
          "id": 11,
          "name": 'باقات اشتراك التطبيق '
        
        },
     
      ];
  }}
  ngOnInit() {
    this.getData();
    
    const ctrls = this.PermissionList.map(control => this.fb.control(false));
  
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.rForm) {
      debugger
      this.rForm = this.fb.group({
        'id':[0],
        'roleName': ['',Validators.required],
        'permissions':this.fb.array(ctrls),
        
       
      });
    }
   console.log(this.rForm.controls['permissions'])
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.IdentityService.apiRolesGet$Json().subscribe
    (
      (res) => {
       ;
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
    const ctrls = this.PermissionList.map(control => this.fb.control(false));

    this.rForm = this.fb.group({
      'id':[0],
      'roleName': ['',Validators.required],
      'permissions':  this.fb.array(ctrls),
      
     
    });
   
  }

  openNew() {
  ;
 
    this.rForm.reset();
    console.log("PermissionList:"+this.PermissionList)
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
 ;
 debugger;
 const selectedRoles= this.rForm.value.permissions
.map((checked, i) => checked ? this.PermissionList[i].id : null)
.filter(value => value !== null);
this.rForm.value.permissions=selectedRoles;

  let object={body: this.rForm.value};
 
    this.IdentityService.apiCreatePermissionsPost$Json(object).subscribe(
     
      next => {;
        if(next.Code==200){
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
 const selectedRoles= this.rForm.value.permissions
.map((checked, i) => checked ? this.PermissionList[i].id : null)
.filter(value => value !== null);
this.rForm.value.permissions=selectedRoles;
  let object={body: this.rForm.value};
 
    this.IdentityService.apiUpdatePermissionsPost$Json(object).subscribe(
     
      next => {;
        if(next.Code ==200){
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
get permissionsArr() {
  return this.rForm.get('permissions') as FormArray;
}
showDialog(item:Permission){
debugger;

  this.PermissionList.map((perm, i) => {
    if (item.Permissions.indexOf(perm.id) !== -1) {
      this.permissionsArr.at(i).patchValue(true)
    }
  })

  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.Id),
      //
      'roleName': this.fb.control(item.Name),
      'permissions': this.permissionsArr,
     
    });
}

remove(Model){
 ;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.IdentityService.apiDeleteDelete$Json({id:object.id}).subscribe
      (
        res => {
          console.log(res);
          if(res.Code ==200){
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

}