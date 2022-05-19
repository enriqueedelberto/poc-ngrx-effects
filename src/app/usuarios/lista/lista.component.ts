import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
   usuarios: Usuario[] | undefined;
   loading: boolean = false;
   error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
      
    // this.usuarioService.getUsers()
    // .subscribe(users=>{
    //   console.log(users);
    //   this.usuarios = users;
    // });

     this.store.select('usuarios').subscribe(({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
     });

     this.store.dispatch(cargarUsuarios());
  }

}
