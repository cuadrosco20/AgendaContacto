import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';


import {AuthService } from '../../servicios/auth.service';


//  Service 
import { UsuarioService } from '../../servicios/usuario.service';

// Class
import { Usuario } from '../../models/usuario';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
   
 
  ) { }

  ngOnInit() {
    this.usuarioService.getUsuarios();
    this.resetForm();
  }

  onSubmit(usuarioForm: NgForm)
  {
    if(usuarioForm.value.$key == null)
      this.usuarioService.insertUsuario(usuarioForm.value);
    else
    this.usuarioService.updateUsuario(usuarioForm.value);
    
    this.resetForm(usuarioForm);
    this.toastr.success('Operación Satisfactoria', 'Usuario Registrado');
  }

  resetForm(usuarioForm?: NgForm)
  {
    if(usuarioForm != null)
      usuarioForm.reset();
      this.usuarioService.selectedUsuario = new Usuario();
  }

}