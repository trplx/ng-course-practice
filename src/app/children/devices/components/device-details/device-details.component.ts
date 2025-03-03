import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Data } from '@angular/router';
import { IDeviceDataInterface } from '../../../../interfaces/device-data.interface';

@Component({
  selector: 'app-device-details',
  imports: [MatListModule],
  templateUrl: './device-details.component.html',
  styleUrl: './device-details.component.scss'
})
export class DeviceDetailsComponent {

    public deviceOptions: Array<{ label: string, value: string }> = []

    protected activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    constructor() {
        this.activatedRoute.data.subscribe((data: Data) => {
            const device: IDeviceDataInterface | undefined = data['device'];

            if (!device) {
                return;
            }

            this.deviceOptions = Object.entries(device).map(([label, value]: [string, string]) => {
                return { label, value };
            })
        });
    }
};
