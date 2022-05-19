import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as userActions from '../actions';

export interface UsuariosState {
   users: Usuario[],
   loaded: boolean,
   loading: boolean,
   error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
   loaded: false,
   loading: false,
   error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(userActions.cargarUsuarios, state => ({ ...state, loading: true})),
    on(userActions.cargarUsuariosSuccess, (state, {usuarios}) =>
     ({ ...state, 
        loading: false,
        loaded: true,
        users: [...usuarios]   
    })),
    on(userActions.cargarUsuariosError, (state, {payload}) => ({ 
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

export function usuariosReducer(state: any, action: any) {
    return _usuariosReducer(state, action);
}