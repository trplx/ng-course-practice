import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { uuidValidator } from '../validators/uuid.validator';
import { delay, of } from 'rxjs';

@Directive({
    selector: '[uuid-validator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UuidValidatorDirective,
        multi: true
    }],
})
export class UuidValidatorDirective implements Validator {
    public validate(control: AbstractControl): ValidationErrors | null {
        return of(uuidValidator()(control))
            .pipe(
                delay(1000),
            );
    }
}
