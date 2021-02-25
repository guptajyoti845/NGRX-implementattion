import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions} from '../action.types';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return{
      user: action.user
    }
  })
);
