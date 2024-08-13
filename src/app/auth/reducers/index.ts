import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export const initialState: AuthState = {
  user: undefined
}

export interface AuthState {
  user: User;
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    const { user } = action;
    return { user }
  }),
  on(AuthActions.logout, (state, action) => {
    return { user: undefined };
  })
);
