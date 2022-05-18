import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
   usuarios: Usuario[] | undefined;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsers()
    .subscribe(users=>{
      console.log(users);
      this.usuarios = users;
    });
  }

}