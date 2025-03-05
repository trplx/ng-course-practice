import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

const components: any[] = [
    DeviceDetailsComponent,
    DeviceListComponent,
];

@NgModule({
    imports: [
        CommonModule,
        DevicesRoutingModule,
        MatListModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule
    ],
    declarations: components,
    exports: components,
})
export class DevicesModule {
}
