import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { deviceResolver } from '../../resolvers/device.resolver';

const routes: Routes = [
    {
        path: '',
        component: DeviceListComponent
    },
    {
        path: ':deviceId',
        component: DeviceDetailsComponent,
        resolve: { device: deviceResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevicesRoutingModule {
}
