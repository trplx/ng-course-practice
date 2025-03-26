import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uuidValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }

        const valid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(control.value);

        return valid ? null : { invalidUUID: { value: control.value } };
    };
}
