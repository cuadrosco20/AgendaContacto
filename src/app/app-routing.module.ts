import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrincipalComponent } from './principal/principal.component';
import {ContactosComponent} from './contactos/contactos.component';
import {ContactoComponent} from './contactos/contacto/contacto.component';
import {ContactolistComponent} from './contactos/contactolist/contactolist.component';






 const routes: Routes = [
  
   {path:'login', component: LoginComponent},
   {path:'signup', component: SignupComponent},
   {path:'principal', component: PrincipalComponent},
   {path:'contactos', component: ContactosComponent},
   {path:'contacto', component: ContactoComponent},
   {path:'contactolist', component: ContactolistComponent}

  ];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

    
    
})


export class AppRoutingModule{}