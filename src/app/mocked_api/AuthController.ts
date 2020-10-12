export class AuthController
{
	login() {
		return {
			status: 200,
			body: {
				id: 1,
				name: 'admin'
			}
		}
	}
}
