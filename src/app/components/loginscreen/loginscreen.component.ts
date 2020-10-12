import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRootState } from '@appstore/state';
import * as fromActions from '@appstore/actions';
import { UserinfoModel } from '@models/auth/userinfomodel';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.scss']
})
export class LoginscreenComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<IRootState>
  ) { }

  ngOnInit(): void {
  }
  
  loginAction(): void {
    this.auth.login({ login: 'aaa', password: 'bbb' }).subscribe((data: UserinfoModel) => {
      this.store.dispatch(new fromActions.SetLoggedIn(data));
      this.router.navigate(['/']);
    });
  }

}
