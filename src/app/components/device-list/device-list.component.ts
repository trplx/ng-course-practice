import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { IDeviceDataInterface } from '../../interfaces/device-data.interface';
import { RouterModule } from '@angular/router';
import { DeviceRequestService } from '../../services/device-request.service';

@Component({
    selector: 'app-device-list',
    imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatTableModule, RouterModule],
    templateUrl: './device-list.component.html',
    styleUrl: './device-list.component.scss'
})
export class DeviceListComponent implements OnInit {

    public devices: IDeviceDataInterface[] = [];
    public displayedColumns: string[] = ['position', 'name', 'model', 'id', 'date'];

    constructor(private _deviceRequestService: DeviceRequestService) { }

    public ngOnInit(): void {
        this._deviceRequestService.getDevices()
            .subscribe((response) => {
                this.devices = response;
            });
    }

}
