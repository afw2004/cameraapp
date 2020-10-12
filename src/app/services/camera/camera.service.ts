import { Inject, Injectable } from '@angular/core';
import { AuthenticationModel } from '@models/auth/authenticationmodel';
import { CameraResponseModel } from '@models/camera/cameraresponsemodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CameraService {
	constructor(@Inject('baseref') private baseRef, private http: HttpClient) {}
	
	cameras(): Observable<CameraResponseModel[]> {
		return this.http.get<CameraResponseModel[]>(this.baseRef + '/camera/cameras');
	}
}
