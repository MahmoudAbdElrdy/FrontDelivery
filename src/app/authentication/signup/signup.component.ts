import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  UserName:any;
  password:any;
  Confirmpassword:any;
  mail:any;
  result: any;
  disabled:boolean=false;

  constructor(private router:Router,private messageService: MessageService) { }

  ngOnInit() {
  }
  onSubmit(){}
//   onSubmit(){
//     debugger;
//     this.model.UserName=this.UserName;
//     this.model.Password=this.password;
//     this.model.PasswordSalt=this.Confirmpassword;
//     this.model.EMail=this.mail;
//     this.Service.register( this.model.UserName, this.model.Password,this.model.EMail).subscribe((data: any) => {
//     debugger;
    
//     //  this.result=data.Data;
//       if(data==0){
//         debugger;
       
//         this.router.navigate(['/login']);
//         this.messageService.add({severity:'success', summary:'successed ',  key: 'myToast', detail:' successed regstration'});

//       }
//       else{
       
//        // localStorage.setItem("token","False");
//       // this.router.navigateByUrl('/login');
//        this.messageService.add({severity:'error', summary:'تسجيل  ',  key: 'myToast', detail:'Falied regstration'});

//       }
//      } )
// }
CheckConfirm(){
  debugger;
  if(this.password!=this.Confirmpassword){
    //window.location.replace("/dashboard");
    this.messageService.add({severity:'error', summary:'تسجيل  ',  key: 'myToast', detail:'يجب ان تكون كلمة المرور متطابقة'});

  }
  else{
    this.disabled=true;
  }
}
}
