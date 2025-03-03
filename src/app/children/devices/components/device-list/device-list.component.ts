import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { IDeviceDataInterface } from '../../../../interfaces/device-data.interface';
import { Router } from '@angular/router';
import { DEVICE_LIST } from '../../contsnts/device-list.constant';

@Component({
  selector: 'app-device-list',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatTableModule],
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
