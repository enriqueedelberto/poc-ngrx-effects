import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios Component] Cargar usuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios Component] Cargar usuarios success',
    props<{usuarios: Usuario[]}>());
    
export const cargarUsuariosError = createAction(
        '[Usuarios Component] Cargar usuarios error',
        props<{payload: any}>());