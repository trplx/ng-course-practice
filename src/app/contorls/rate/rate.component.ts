import {Component, forwardRef, input, InputSignal, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IRateOptions} from './interfaces/rate-options.inteface';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-rate',
    standalone: true,
  imports: [
      CommonModule,
  ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RateComponent),
            multi: true,
        }
    ],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss'
})
export class RateComponent implements ControlValueAccessor, OnInit {

    public options: InputSignal<IRateOptions> = input<IRateOptions>({ countRates: 5 });

    public label: string | undefined = undefined;

    public currentIndex: number = 0;

    public rateArr: number[] = [];

    public disable: boolean = false;


    private touched: boolean = false;

    public ngOnInit(): void {

        this.label = this.options().label;

        this.rateArr = [...Array(this.options().countRates)].map((_, i) => i + 1);
    }

    public onRate(value: number): void {
        this.markAsTouched();
        if (!this.disable) {
            this.currentIndex = value;
            this.onChange(value);
        }

    }

    public markAsTouched(): void {
        if (this.touched) {
            this.onTouched();
        }
    }


    writeValue(obj: any) {
    }

    public registerOnChange(fn: any) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }


    public setDisabledState(isDisabled: boolean) {
        this.disable = isDisabled;
    }


    onChange = (value: any) => {
    }

    onTouched = () => {}

}
