import { Action } from '@ngrx/store';
import { UserinfoModel } from '@models/auth/userinfomodel';

export enum ERootActions {
	SetLoggedIn = '[Auth] Set Logged In',
	SetLocale = '[Auth] Set Locale'
}

export class SetLoggedIn implements Action {
	public readonly type = ERootActions.SetLoggedIn;
	
	constructor( public payload: UserinfoModel ) {}
}

export class SetLocale implements Action {
	public readonly type = ERootActions.SetLocale;
	
	constructor( public payload: string ) {}
}

export type RootActions = SetLoggedIn | SetLocale;
