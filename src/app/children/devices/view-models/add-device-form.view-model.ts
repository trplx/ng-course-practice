import { IAddDeviceForm } from '../intefaces/add-device-form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uuidValidator } from '../validators/uuid.validator';
import { Device } from '../../../models/device.model';
import { EMPTY, Observable } from 'rxjs';

export class AddDeviceFormViewModel {
    get controlsMap(): IAddDeviceForm {
        return this.form.controls;
    }

    get form(): FormGroup<IAddDeviceForm> {
        return this._form;
    }

    private _form: FormGroup<IAddDeviceForm> = new FormGroup<IAddDeviceForm>(this.getControls());

    public toModel(): Device {
        const formValue = this._form.getRawValue();

        return new Device(
            formValue.deviceId,
            formValue.deviceName,
            formValue.deviceModel,
        );
    }

    public getFormValue(name: keyof IAddDeviceForm): string | undefined {
        return this.controlsMap[name] ? this.controlsMap[name].value : undefined;
    }

    public setFormValue(name: keyof IAddDeviceForm, value: string, onlySelf: boolean = false, emitEvent: boolean = true): void {
        if (this.controlsMap[name]) {
            this.controlsMap[name].setValue(value, { onlySelf, emitEvent });
        }
    }

    public valueChanges(name: keyof IAddDeviceForm): Observable<string> {
        return this.controlsMap[name] ? this.controlsMap[name].valueChanges : EMPTY;
    }

    protected getControls(): IAddDeviceForm {
        return {
            deviceId: new FormControl<string>(crypto.randomUUID(), { nonNullable: true, validators: uuidValidator() }),
            deviceName: new FormControl<string>('', { nonNullable: true, validators:  Validators.required }),
            deviceModel: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
        };
    }
}