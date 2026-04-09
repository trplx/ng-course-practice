import { Component, signal, WritableSignal } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Device } from '../../../../models/device.model';
import { MatListItem } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { delay, finalize, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { uuidValidator } from '../../validators/uuid.validator';
import { UuidValidatorDirective } from '../../directives/uuid-validator.directive';
import { IAddDeviceForm } from '../../intefaces/add-device-form.interface';
import { AddDeviceFormViewModel } from '../../view-models/add-device-form.view-model';
import {RateComponent} from '../../../../contorls/rate/rate.component';
import {IRateOptions} from '../../../../contorls/rate/interfaces/rate-options.inteface';

@Component({
    selector: 'app-add-device',
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        MatButton,
        MatListItem,
        CommonModule,
        MatProgressSpinnerModule,
        MatError,
        UuidValidatorDirective,
        RateComponent,
    ],
    templateUrl: './add-device.component.html',
    styleUrl: './add-device.component.scss'
})
export class AddDeviceComponent {
    protected newDevices: Device[] = [];
    protected loading: WritableSignal<boolean> = signal(false);

    protected deviceForm: AddDeviceFormViewModel = new AddDeviceFormViewModel();

    protected rateControlOptions: IRateOptions = {
        countRates: 7,
        label: 'Рейтинг устройства',
    }

    protected onSubmit(): void {
        this.loading.set(true);

        of(this.deviceForm.toModel())
            .pipe(
                delay(1000),
                finalize(() => this.loading.set(false)),
            )
        .subscribe((value) => {
            this.newDevices.push(value);
        });
    }
}
