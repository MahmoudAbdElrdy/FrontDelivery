import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService, MenuItem} from 'primeng/api';
@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {
  UserName:any;
  password:any;
  Confirmpassword:any;

  result: any;
  disabled:boolean=false;
 
  constructor(private router:Router,private messageService: MessageService) { }

  ngOnInit() {
    this.UserName=localStorage.getItem("UserName");
  }
  Submit(){}
//   Submit(){
//     debugger;
//     this.UserName=localStorage.getItem("UserName");
//     this.model.UserName=this.UserName;
//     this.model.Password=this.password;
//     this.model.PasswordSalt=this.Confirmpassword;
  
//     this.Service.ResetPassword(this.model).subscribe((data: any) => {
//     debugger;
//       this.result=data.Data;
//       if(data.IsPassed){
//         debugger;
//        //this.router.navigate(['/Store/authentication/login']);
//        this.router.navigate(['/login']);
//         this.messageService.add({severity:'success', summary:'successed ',  key: 'myToast', detail:' successed '});

//       }
//       else{
//         this.router.navigate(['/login']);
//        // localStorage.setItem("token","False");
//       // this.router.navigateByUrl('/login');
//        this.messageService.add({severity:'error', summary:'تسجيل  ',  key: 'myToast', detail:'Falied '});

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
