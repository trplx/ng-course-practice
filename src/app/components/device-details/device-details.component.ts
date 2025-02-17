import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-device-details',
  imports: [MatListModule],
  templateUrl: './device-details.component.html',
  styleUrl: './device-details.component.scss'
})
export class DeviceDetailsComponent {

    public deviceOptions: Array<{ label: string, value: string }> = [
        { label: 'Position', value: '1'},
        { label: 'Name', value: 'iPhone'},
        { label: 'Model', value: '16 pro max'},
        { label: 'Id', value: '12345'},
        { label: 'Date', value: '19.02.2025'}
    ]
};
