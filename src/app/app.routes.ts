import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full',
    },
    {
        path: 'devices',
        loadChildren: () => import('./children/devices/devices.module').then(m => m.DevicesModule),
        canActivate: [authGuard],
    },
    {
        path: '401',
        component: UnauthorizedComponent
    },
];
