import { Component, OnInit } from '@angular/core';
import{AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public email: string;
  public password:string;

 

  constructor(
    public authService:AuthService,
    public router: Router

  ) { }
    
  ngOnInit() {
  }
   onSubmitAddUser(){
    this.authService.registraruser(this.email, this.password)
    .then((res)=>{
     this.router.navigate(['login'])
      console.log(res);
     }).catch ((err)=>{
       console.log(err);
    
    });
   }



   signup(){
    return this.authService.registraruser(this.email, this.password)
   }


}

