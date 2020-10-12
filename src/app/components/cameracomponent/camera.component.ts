import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CameraResponseModel } from '@models/camera/cameraresponsemodel';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraComponent {
  @Input() item: CameraResponseModel;
}
