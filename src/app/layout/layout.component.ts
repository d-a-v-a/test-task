import { Component } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { RouterOutlet } from '@angular/router';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CompanyListComponent, CompanyDetailComponent, CompanyYandexMapComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
