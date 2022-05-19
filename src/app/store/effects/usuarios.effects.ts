import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions"; 

//Section 13: effects

//all effects related to users.
@Injectable()
export class UsuariosEffects {
   constructor(
       private actions$: Actions,//Observable that listens to actions
       private usuariosService: UsuarioService){

   }


   cargarUsuarios$ = createEffect(
       () => this.actions$.pipe(
         ofType( usuariosActions.cargarUsuarios ),
        //  tap( data => console.log('Effect here tap', data)), //for debugging
         mergeMap( 
             ()=> this.usuariosService.getUsers()
             .pipe(
                //  tap( data => console.log('Get users from Effect ', data))  //for debugging
                map( users => usuariosActions.cargarUsuariosSuccess({usuarios: users})),
                catchError(err => of(usuariosActions.cargarUsuariosError({payload: err})))
             )
         )
       )
   );


}