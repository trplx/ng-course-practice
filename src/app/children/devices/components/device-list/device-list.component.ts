import { Component, inject, OnInit } from '@angular/core';
import { IDeviceDataInterface } from '../../../../interfaces/device-data.interface';
import { Router } from '@angular/router';
import { DeviceRequestService } from '../../../../services/device-request.service';


@Component({
    standalone: false,
    selector: 'app-device-list',
    templateUrl: './device-list.component.html',
    styleUrl: './device-list.component.scss'
})
export class DeviceListComponent implements OnInit {

    public devices: IDeviceDataInterface[] = [];

    public displayedColumns: string[] = ['position', 'name', 'model', 'id', 'date'];

    protected router: Router = inject(Router);

    // private _deviceRequestService: DeviceRequestService = inject(DeviceRequestService);


    constructor(
        private _deviceRequestService: DeviceRequestService
    ) { }

    protected navigateToDetails(deviceId: string): void {
        this.router.navigate(['/devices', deviceId]);
    }

    public ngOnInit(): void {
        this._deviceRequestService.getDevices()
            .subscribe((response) => {
                this.devices = response;
            });
    }

}
