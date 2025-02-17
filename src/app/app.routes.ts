import { Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { AddDeviceFormComponent } from './components/add-device-form/add-device-form.component';

export const routes: Routes = [
    {
        path: '',
        component: DeviceListComponent,
        title: 'Device list'
    },
    {
        path: 'details/:id',
        component: DeviceDetailsComponent,
        title: 'Device details'
    },
    {
        path: 'add-device',
        component: AddDeviceFormComponent,
        title: 'Add device'
    }
];
