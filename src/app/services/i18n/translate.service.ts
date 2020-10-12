import { Inject, Injectable } from '@angular/core';

@Injectable()
export class TranslateService {
	private translation = {
		'en': {
			'LoginEnter': 'Login',
		},
		'ru': {
			'Login': 'Логин',
			'Password': 'Пароль',
			'LoginEnter': 'Войти',
			'English': 'Английский',
			'Russian': 'Русский',
			'Cameras': 'Камеры',
			'Reporting': 'Отчет',
			'Settings': 'Настройки',
			'Camera app': 'Тест камеры',
			'pass': 'Проверено',
			'fail': 'Ошибка'
		}
	};
	private currentLocale = 'en';
	
	constructor() {}
	
	getCurrentLocale() {
		return this.currentLocale;
	}
	
	translate(from) {
		const tr = this.translation[this.currentLocale];
		if (tr && tr[from]) {
			return tr[from];
		}
		return from;
	}
	
	getLocales() {
		return [
			{ value: 'en', viewValue: this.translate('English') },
			{ value: 'ru', viewValue: this.translate('Russian') }
		];
	}
	
	setLocale(locale: string) {
		this.currentLocale = locale;
	}
};