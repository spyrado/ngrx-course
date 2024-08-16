import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BaseRouterStoreState, routerReducer } from '@ngrx/router-store';

export const authFeatureKey = 'auth';

export interface AppState {
  router: ActionReducer<BaseRouterStoreState, Action>
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {

  return (state, action) => {
    // console.log("state before: ", state);
    // console.log("action atual: ", action);
    return reducer(state, action);
  }
}
