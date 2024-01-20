import { Component, Input } from '@angular/core';
import { Company } from '../../../interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent {
  @Input() company!: Company;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/detail', this.company.id]);
  }
}
