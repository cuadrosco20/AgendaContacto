import { Component, OnInit } from '@angular/core';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'
import { AuthService } from '../servicios/auth.service';
import { ContactoService } from '../servicios/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;

 


  constructor(
    public authService: AuthService,
    public contactoService : ContactoService,
    public router :Router
  
  ) { }  
  
  ngOnInit()
  
  {
    this.authService.getAuth().subscribe( auth => {
      if (auth ) {
       
        this.isLogin = true;
         this.nombreUser = auth.displayName;
         this.emailUser= auth.email;
         
        
      } else {
        this.isLogin = false;
       
        }
    });
  }
}
