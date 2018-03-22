import { Component, OnInit } from '@angular/core';

// model
import { Usuario } from '../../models/usuario';

// service
import { UsuarioService } from '../../servicios/usuario.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuariolist',
  templateUrl: './usuariolist.component.html',
  styleUrls: ['./usuariolist.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.usuarioService.getUsuarios()
      .snapshotChanges().subscribe(item => {
        this.usuarioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.usuarioList.push(x as Usuario);
        });
      });
  }

  onEdit(usuario: Usuario) {
    this.usuarioService.selectedUsuario = Object.assign({}, usuario);
  }

  onDelete($key: string) {
    if(confirm('Estas seguro que quieres borrar este contacto?')) {
      this.usuarioService.deleteUsuario($key);
      this.toastr.warning('Elmininado Satisfactoriamente', 'Usuario Eliminado');
    }
  }

}

