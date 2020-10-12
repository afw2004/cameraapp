import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IRootState } from './state';

const getRootState = createFeatureSelector<IRootState>('root');
export const selectLoggedIn = createSelector(getRootState, (state: IRootState) => state.loggedIn);
export const selectLocale = createSelector(getRootState, (state: IRootState) => state.locale);
export const selectCurrentUser = createSelector(getRootState, (state: IRootState) => state.currentUser);
