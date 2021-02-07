import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserLoginRequest, UserRegisteration, UserRegisterationRequest } from 'src/app/api/models';
import {IdentityService } from 'src/app/api/services';
import { UploadServicesService } from '../UploadServices/UploadServices.service';
@Component({
  selector: 'app-users-manger',
  templateUrl: './users-manger.component.html',
  styleUrls: ['./users-manger.component.css']
})
export class UsersMangerComponent implements OnInit {

  itemList: UserRegisterationRequest[];
  Dialog: boolean=false;

  User: UserRegisterationRequest=new UserRegisterationRequest();

  submitted: boolean;
  signupForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  identityrole:any[];
  msgs: { severity: string; summary: string; detail: string; }[];
  show:boolean=true;
  constructor(private SpinnerService: NgxSpinnerService,
    private IdentityService: IdentityService, 
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private formBuilder: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
 
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.signupForm) {
      this.InitForm();
    }
  this.getAllRoles();
  }
  InitForm(){
    this.signupForm = this.formBuilder.group({
     id:[],
       userName: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
       email: ['', [Validators.required,Validators.email]],
       password: ['',Validators.required],
       confirmPassword: ['', [Validators.required]],
       fullName: ['',Validators.required],
       phoneNumber:[''],
       roles: ['', Validators.required]
   }, {
     validator:this.MustMatch('password', 'confirmPassword')
 });
  } 
   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
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
    this.IdentityService.apiGetAllMangerGet$Json({Page:pageindex,Size:pageSize}).subscribe
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
  getAllRoles(){
    this.IdentityService.apiRolesGet$Json().subscribe(   (res) => {
      debugger;
      
     this.identityrole = res.Data;
     this.identityrole=this.identityrole.map( (val)=> { return {label:val.Name,value:val.Id}});
     console.log( res);
    },
    err => console.error(err))
  }
  openNew() {
    debugger;
  
     this.signupForm.reset();
     this.InitForm();
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
   this.signupForm.reset();
   this.Dialog=false;
 }
 Add() {
   debugger;
  
  
   let object={body: this.signupForm.value};
  
     this.IdentityService.apiRegisterAdminPost$Json(object).subscribe(
      
       next => { debugger;
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
  
   let object={body: this.signupForm.value};
  
     this.IdentityService.apiUpdateMangerPost$Json(object).subscribe(
      
       next => { debugger;
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
 showDialog(item:UserRegisterationRequest){
 debugger;
   this.submitted = false;
     this.Dialog = true;
     this.Update=true;
    this.show=false;
     this.signupForm = this.formBuilder.group({
      
      id:[item.Id],
      userName: [item.UserName, [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email: [item.Email, [Validators.required,Validators.email]],
      password: [item.Password],
      confirmPassword: [item.ConfirmPassword],
      fullName: [item.FullName,Validators.required],
      phoneNumber:[item.PhoneNumber],
      roles: [item.Roles, Validators.required]
  }, {
    validator:this.MustMatch('password', 'confirmPassword')
      
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
      this.IdentityService.apiDeleteMangerDelete$Json({id:object.id}).subscribe
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

  this.signupForm.reset();
}
}
