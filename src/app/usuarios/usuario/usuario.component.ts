import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import * as usuarioActions from '../../store/actions';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
   usuario: Usuario | undefined;
   loading: boolean = false;
   error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe(({id})=>{
      console.log("id ", id);

      this.store.dispatch( usuarioActions.cargarUsuario({id}));

    }); 
      
    this.store.select('usuario').subscribe(({user, loading, error}) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
      console.log(user);
  });
  }

}
