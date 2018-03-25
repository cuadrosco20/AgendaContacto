import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{Router} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {AuthService } from '../servicios/auth.service';
import {ContactoService} from '../servicios/contacto.service';
import {Http} from '@angular/http';
import { NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FirebaseDatabase } from '@firebase/database-types';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
  public isLogin: boolean;
  public nombreContacto: string;
  public emailContacto: string;
 


  constructor(
    public authService: AuthService,
    public contactoService : ContactoService,
    public router :Router
   
  ) { }  
  
  ngOnInit()
  
  {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
         this.nombreContacto = auth.displayName;

         this.emailContacto= auth.email;
        } else {
        this.isLogin = false;
      }
    });

  
  }

   onclickLogout(){
     this.authService.logout();
   } 


  }
  
  
