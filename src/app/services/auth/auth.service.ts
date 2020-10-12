import { Inject, Injectable } from '@angular/core';
import { AuthenticationModel } from '@models/auth/authenticationmodel';
import { HttpClient } from '@angular/common/http';
import { UserinfoModel } from '@models/auth/userinfomodel';

@Injectable()
export class AuthService {
	constructor(@Inject('baseref') private baseRef, private http: HttpClient) {}
	
	login(auth: AuthenticationModel) {
		return this.http.post<UserinfoModel>(this.baseRef + '/auth/login', {});
	}
}
