import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private _data: string[] = [];

    constructor() { }

    /**
     * Get data
     * @returns string[]
     */
    public getData(): string[] {
        return this._data;
    }

    public addData(dataItem: string): void {
        this._data.push(dataItem);
    }

}
