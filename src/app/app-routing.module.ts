import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PrincipalComponent } from './principal/principal.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';
import {UsuarioListComponent} from './usuarios/usuariolist/usuariolist.component';






 const routes: Routes = [
  
   {path:'login', component: LoginComponent},
   {path:'signup', component: SignupComponent},
   {path:'principal', component: PrincipalComponent},
   {path:'usuarios', component: UsuariosComponent},
   {path:'usuario', component: UsuarioComponent},
   {path:'usuariolist', component: UsuarioListComponent}

  ];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

    
    
})


export class AppRoutingModule{}