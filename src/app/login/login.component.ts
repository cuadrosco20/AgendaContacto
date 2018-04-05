import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{Router} from '@angular/router';
import {AuthService } from '../servicios/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public email: string;
  public password:string;
 
  constructor(
    public authService: AuthService,
    public router :Router
  
  ){}
  ngOnInit() {

  }
    


   onSubmitLogin(){
     this.authService.loginEmail(this.email ,this.password)
    .then( (res) =>{
      this.router.navigate(['principal']);
   }).catch( (err)=>{
      this.router.navigate(['signup']);
     });
  }


  
}

