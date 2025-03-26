import { FormControl } from '@angular/forms';

export interface IAddDeviceForm {
    deviceId: FormControl<string>;
    deviceName: FormControl<string>;
    deviceModel: FormControl<string>;
}