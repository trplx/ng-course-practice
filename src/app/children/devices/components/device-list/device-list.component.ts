import { Component, inject } from '@angular/core';
import { IDeviceDataInterface } from '../../../../interfaces/device-data.interface';
import { Router } from '@angular/router';
import { DEVICE_LIST } from '../../contsnts/device-list.constant';

@Component({
  standalone: false,
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent {

  public devices: IDeviceDataInterface[] = DEVICE_LIST;

  public displayedColumns: string[] = ['position', 'name', 'model', 'id', 'date'];

  protected router: Router = inject(Router);

  protected navigateToDetails(deviceId: string): void {
    this.router.navigate(['/devices', deviceId]);
  }
}
