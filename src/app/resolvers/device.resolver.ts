import { ResolveFn } from '@angular/router';
// import { DEVICE_LIST } from '../children/devices/contsnts/device-list.constant';
import { IDeviceData } from '../interfaces/device-data.interface';

export const deviceResolver: ResolveFn<IDeviceData | undefined> = (route, state) => {
//   const deviceId = route.paramMap.get('deviceId');

//   return DEVICE_LIST.find((device) => device.id === deviceId);

};
