import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@services/i18n/translate.service';
import { Store, select } from '@ngrx/store';
import { IRootState } from '@appstore/state';
import { selectLocale } from '@appstore/selectors';

@Pipe({
	name: 'translate',
	pure: false
})
export class TranslatePipe implements PipeTransform {
	constructor(private translate: TranslateService, private store: Store<IRootState>) {}
	
	transform(value: string, args?: any) {
		return this.translate.translate(value);
	}
}