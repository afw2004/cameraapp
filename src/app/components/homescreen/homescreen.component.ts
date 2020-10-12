import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { CameraService } from '@services/camera/camera.service';
import { CameraResponseModel } from '@models/camera/cameraresponsemodel';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRootState } from '@appstore/state';
import { Observable, Subject } from 'rxjs';
import * as fromActions from '@appstore/actions';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomescreenComponent implements OnInit, OnDestroy {
  public items: CameraResponseModel[] = [];
  private timer = 0;
  
  constructor(
    private auth: AuthService,
    private cameras: CameraService,
    private router: Router,
    private store: Store<IRootState>,
    private cd: ChangeDetectorRef
  ) { }

  updateContent() {
      this.cameras.cameras().subscribe((data: CameraResponseModel[]) => {
        this.items = data;
        this.cd.markForCheck();
      });
  }

  ngOnInit(): void {
    this.updateContent();
    this.timer = setInterval(() => this.updateContent(), 500)
  }
  
  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
