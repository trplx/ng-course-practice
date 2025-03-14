import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { IDeviceDataInterface } from '../interfaces/device-data.interface';

@Injectable()
export class DeviceRequestService {

    private _url: string = 'mock-data.json';

    constructor(private _http: HttpClient) {

    }

    /**
     * Get mock devices data
     * @returns Observable<IDeviceDataInterface[]>
     */
    public getDevices(): Observable<IDeviceDataInterface[]> {
        return this._http.get<IDeviceDataInterface[]> (this._url)
            .pipe(
                catchError(() => {
                    return throwError(() => 'Ошибка при запросе списка устройств')
                })
            );
    }

}
