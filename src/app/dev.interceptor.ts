import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AuthController } from './mocked_api/AuthController';
import { CameraController } from './mocked_api/CameraController';

import { environment } from '../environments/environment';

@Injectable()
export class DevInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (req.url.startsWith(environment.baseRef)) {
			const href = req.url.replace(environment.baseRef, '');
			const href_parts = href.split('/');
			
			if (href_parts.length > 1)
			{
				const className = href_parts[1];
				const actionName = (href_parts.length > 2) ? (href_parts[2]) : 'default';
				
				let cntrlObject = null;
				if (className === 'auth') {
					cntrlObject = new AuthController();
				} else if (className === 'camera') {
					cntrlObject = new CameraController();
				}
				
				if (cntrlObject !== null) {
					const data = cntrlObject[actionName].apply(cntrlObject);
					return of(new HttpResponse(data));
				}
			}
		}

		return next.handle(req);
	}
}
