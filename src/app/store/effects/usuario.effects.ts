import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions"; 

//Section 13: effects

//all effects related to users.
@Injectable()
export class UsuarioEffects {
   constructor(
       private actions$: Actions,//Observable that listens to actions
       private usuariosService: UsuarioService){

   }


   cargarUsuario$ = createEffect(
       () => this.actions$.pipe(
         ofType( usuariosActions.cargarUsuario ),
        //  tap( data => console.log('Effect here tap', data)), //for debugging
         mergeMap( 
             (action)=> this.usuariosService.getUserById(action.id)
             .pipe(
                //  tap( data => console.log('Get users from Effect ', data))  //for debugging
                map( user => usuariosActions.cargarUsuarioSuccess({usuario: user})),
                catchError(err => of(usuariosActions.cargarUsuarioError({payload: err})))
             )
         )
       )
   );


}