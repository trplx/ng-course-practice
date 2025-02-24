import { Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list/device-list.component';
// import { DeviceDetailsComponent } from './components/device-details/device-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DeviceListComponent
    }
];
