import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IRootState } from '@appstore/state';
import { Router } from '@angular/router';
import { selectLoggedIn, selectCurrentUser, selectLocale } from '@appstore/selectors';
import * as fromActions from '@appstore/actions';
import { TranslateService } from '@services/i18n/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cameraapp';
  currentLocale = 'en';
  locales = [];
  username = '';
  loggedIn = false;
  
  constructor(
    private store: Store<IRootState>,
    private router: Router,
    private translateService: TranslateService,
    private cd: ChangeDetectorRef
  ) {
    this.locales = this.translateService.getLocales();
  }
  
  ngOnInit() {
    this.store.pipe(select(selectLoggedIn)).subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }
    });
    
    this.store.pipe(select(selectCurrentUser)).subscribe(user => {
      if (user) {
        this.username = user.name;
      } else {
        this.username = '';
      }
    });
    
    this.store.pipe(select(selectLocale)).subscribe(locale => {
      this.currentLocale = locale;
      this.translateService.setLocale(locale);
      this.locales = this.translateService.getLocales();
    });
  }
  
  onChangeLocale($event) {
    this.store.dispatch(new fromActions.SetLocale($event.value));
    this.translateService.setLocale($event.value);
    this.locales = this.translateService.getLocales();
    this.cd.markForCheck();
  }
  
  onLogoutClick() {
    this.store.dispatch(new fromActions.SetLoggedIn(null));
  }
}
