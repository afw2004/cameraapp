import { UserinfoModel } from '@models/auth/userinfomodel';

export interface IRootState {
	loggedIn: boolean;
	currentUser: UserinfoModel;
	locale: string;
}
