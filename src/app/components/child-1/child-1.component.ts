import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-child-1',
    imports: [],
    providers: [
        DataService
    ],
    templateUrl: './child-1.component.html',
    styleUrl: './child-1.component.scss'
})
export class Child1Component {

    public devices: string[];

    constructor(
        private _dataService: DataService
    ) {
        this._dataService.addData('Apple iPhone 15 pro max');
        this._dataService.addData('Apple iPhone 16');

        this.devices = this._dataService.getData();
    }

}
