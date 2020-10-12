import { createReducer } from '@ngrx/store';
import { RootActions, ERootActions } from './actions';
import { IRootState } from './state';
import { UserinfoModel } from '@models/auth/userinfomodel';

function createInitialState() : IRootState {
	let currentUser = null;
	const currentUserSerialized = sessionStorage.getItem('currentUser');
	if (currentUserSerialized) {
		currentUser = JSON.parse(currentUserSerialized);
	}
	
	const currentLocale = sessionStorage.getItem('locale');
	
	return {
		loggedIn: currentUser ? true : false,
		currentUser: currentUser,
		locale: currentLocale ?? 'en'
	};
}

export const initialState: IRootState = createInitialState();

export function reducer (
	state = initialState,
	action: RootActions
): IRootState {
	switch (action.type) {
		case ERootActions.SetLoggedIn:
		{
			sessionStorage.setItem('currentUser', JSON.stringify(action.payload));
			return {
				...state,
				loggedIn: action.payload ? true : false,
				currentUser: action.payload
			};
		}
		case ERootActions.SetLocale:
			sessionStorage.setItem('locale', action.payload);
			return {
				...state,
				locale: action.payload
			}
		default:
			return state;
	}
}
