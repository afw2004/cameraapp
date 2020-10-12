import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { reducer } from './store/reducer';


import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { ReportingscreenComponent } from './components/reportingscreen/reportingscreen.component';
import { SettingsscreenComponent } from './components/settingsscreen/settingsscreen.component';
import { CameraComponent } from './components/cameracomponent/camera.component';

import { AuthService } from './services/auth/auth.service';
import { CameraService } from './services/camera/camera.service';
import { TranslateService } from './services/i18n/translate.service';

import { TranslatePipe } from './pipes/translate.pipe';

import { environment } from '../environments/environment';
import { DevInterceptor } from './dev.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const devProviders = [{
  provide: HTTP_INTERCEPTORS,
  useClass: DevInterceptor,
  multi: true
}];

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    HomescreenComponent,
    ReportingscreenComponent,
    SettingsscreenComponent,
    CameraComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    
    StoreModule.forRoot({ root: reducer })
  ],
  providers: [
    AuthService,
    CameraService,
    TranslateService,
    {
      provide: 'baseref',
      useFactory: () => environment.baseRef
    },
    ...!environment.production ? devProviders : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
