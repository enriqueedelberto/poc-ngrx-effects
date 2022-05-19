import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as userActions from '../actions';

export interface UsuarioState {
    id?: string,
   user?: Usuario,
   loaded: boolean,
   loading: boolean,
   error: any
}

export const UsuarioInitialState: UsuarioState = {
   id: undefined,
   user: undefined ,
   loaded: false,
   loading: false,
   error: null
}

const _UsuarioReducer = createReducer(UsuarioInitialState,

    on(userActions.cargarUsuario, (state, {id}) => ({
         ...state, 
         loading: true,
        id: id})),
    on(userActions.cargarUsuarioSuccess, (state, {usuario}) =>
     ({ ...state, 
        loading: false,
        loaded: true,
        user: {...usuario}
    })),
    on(userActions.cargarUsuarioError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        } 
    })),
);

export function UsuarioReducer(state: any, action: any) {
    return _UsuarioReducer(state, action);
}