import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService, MenuItem} from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner"
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentityService } from 'src/app/api/services';
import { UserLoginRequest } from 'src/app/api/models';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html'
})
export class LoginComponent implements OnInit {
  signinForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  UserName:string;
  password:string;
  Confirmpassword:string;
  result:any;
  disabled:boolean=false;
  rememberme:any;
  AdminDto:UserLoginRequest=new UserLoginRequest();
  fail: boolean;
  sucess: boolean;
  Model: any;
  constructor(private router: Router,private formBuilder: FormBuilder, private IdentityServ:IdentityService,
    private messageService: MessageService,private _cookieService:CookieService,
    private spinner: NgxSpinnerService,
    ) {}

  ngOnInit() {}
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  onSubmit(){
    debugger;
    debugger;
    this.spinner.show();
    this.AdminDto.Email=this.UserName;
    this.AdminDto.Password=this.password;
    var Object={body:this.AdminDto};
   this.IdentityServ.apiLoginPost$Json(Object).subscribe(
    next => { debugger; console.log(next);
      this.Model=next.Data;
      if(next.Code==200){
    debugger;
  
 
    if(this.Model.Role!="Admin"){
      this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' ليس لديك صلاحياته للدخول للوحة التحكم'});
    
      }
      else{
        localStorage.setItem('lang',"ar");
        localStorage.setItem("direction",'rtl')
        localStorage.setItem("token","True");
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem("UserName",this.UserName);
        this.router.navigate(['/Home'])
      }
 
  // else{
   
  //   this._cookieService.put('username',this.UserName);
  //   this._cookieService.put('password',this.password);
  //   this._cookieService.put('remember',this.rememberme);
  //   this.router.navigate(['/Home'])
  // }

 
  

  }
  else{
    this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' هناك خطأ في الميل او الباسورد'});

  }
    this.spinner.hide(); },
error => { this.fail = true;

  this.spinner.hide(); },
() => { this.sucess = true;
  this.spinner.hide(); }

   )
  }


}
