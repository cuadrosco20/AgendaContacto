import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './servicios/auth.service';
import {ContactoService} from './servicios/contacto.service';
import {environment} from '../environments/environment';
import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';



import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatButtonModule,
       MatFormFieldModule,
       MatCardModule,
       MatMenuModule,
       MatToolbarModule,
       MatIconModule} from '@angular/material';

       import { FooterComponent } from './footer/footer.component';
       import { LoginComponent } from './login/login.component';
       import { SignupComponent } from './signup/signup.component';
       import { MenuComponent } from './menu/menu.component';
       import { PrincipalComponent } from './principal/principal.component';
       import { ToastrModule } from 'ngx-toastr';
       import { ContactoComponent } from './contactos/contacto/contacto.component';
       import { ContactosComponent } from './contactos/contactos.component';
       import { ContactolistComponent } from './contactos/contactolist/contactolist.component';
               



       @NgModule({
        declarations: [
          AppComponent,
          FooterComponent,
          LoginComponent,
          SignupComponent,
          MenuComponent,
          PrincipalComponent,
          ContactoComponent,
          ContactosComponent,
          ContactolistComponent
   
         
       
          
      
          
          
          
        ],
        imports: [
          BrowserModule,
          FormsModule,
          HttpModule,
          BrowserAnimationsModule,
          MatButtonModule,
          MatCardModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFireAuthModule,
          AppRoutingModule,
          AngularFireDatabaseModule,
          ToastrModule.forRoot(),
        
          
        
         
        ],
        providers: [AuthService,ContactoService],
        bootstrap: [AppComponent]
      })
       


export class AppModule { }
