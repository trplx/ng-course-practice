import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        title: 'List page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details page',
    },
    
];
