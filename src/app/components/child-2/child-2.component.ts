import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-child-2',
    imports: [],
    providers: [
        DataService
    ],
    templateUrl: './child-2.component.html',
    styleUrl: './child-2.component.scss'
})
export class Child2Component {

    public devices: string[];

    constructor(
        private _dataService: DataService
    ) {
        this._dataService.addData('Samsung galaxy S25 Ultra');
        this._dataService.addData('Samsung galaxy S24');

        this.devices = this._dataService.getData();
    }

}
