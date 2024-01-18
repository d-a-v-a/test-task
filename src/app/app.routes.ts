import { Routes } from '@angular/router';
import { CompanyListComponent } from './layout/company-list/company-list.component';
import { CompanyDetailComponent } from './layout/company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './layout/company-yandex-map/company-yandex-map.component';

export const routes: Routes = [
    { path: 'list', component: CompanyListComponent },
    { path: 'detail/:id', component: CompanyDetailComponent },
    { path: 'map', component: CompanyYandexMapComponent },
    { path: '**', redirectTo: '/list', pathMatch: 'full'},
];
