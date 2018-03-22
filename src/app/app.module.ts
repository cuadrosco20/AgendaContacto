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
       import { UsuariosComponent } from './usuarios/usuarios.component';
       import { UsuarioComponent } from './usuarios/usuario/usuario.component';
       import {UsuarioListComponent} from './usuarios/usuariolist/usuariolist.component';
       import { UsuarioService } from './servicios/usuario.service';
       import { ToastrModule } from 'ngx-toastr';
       



       @NgModule({
        declarations: [
          AppComponent,
          FooterComponent,
          LoginComponent,
          SignupComponent,
          MenuComponent,
          PrincipalComponent,
          UsuariosComponent,
          UsuarioComponent,
          UsuarioListComponent
   
         
       
          
      
          
          
          
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
        providers: [AuthService,UsuarioService],
        bootstrap: [AppComponent]
      })
       


export class AppModule { }
