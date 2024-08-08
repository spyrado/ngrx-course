import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
