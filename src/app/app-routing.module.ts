import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { PrincipalComponent } from './principal/principal.component';
import {ContactosComponent} from './contactos/contactos.component';
import {ContactoComponent} from './contactos/contacto/contacto.component';
import {ContactolistComponent} from './contactos/contactolist/contactolist.component';
import {MensajesComponent} from './mensajes/mensajes.component';
import {HomeComponent } from './home/home.component';
import {SalidaComponent} from './salida/salida.component';





 const routes: Routes = [
  
   {path:'login', component: LoginComponent},
   {path:'signup', component: SignupComponent},
  //  {path:'principal', component: PrincipalComponent},
   {path:'contactos', component: ContactosComponent},
   {path:'contacto', component: ContactoComponent},
   {path:'contactolist', component: ContactolistComponent},
   {path:'mensajes', component: MensajesComponent},
   {path:'home', component: HomeComponent},
   {path:'salida', component: SalidaComponent}

  ];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

    
    
})


export class AppRoutingModule{}