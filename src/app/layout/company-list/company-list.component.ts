import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyItemComponent } from './company-item/company-item.component';
import { SaveCompanyService } from '../../services/save-company.service';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { Company } from '../../interfaces/company.interface';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CompanyItemComponent, CommonModule, CompanySortComponent, CompanyFilterComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent{
  constructor(private saveCompanyService: SaveCompanyService) {}

  isLoading$ = this.saveCompanyService.isLoading$;
  companyList$ = this.saveCompanyService.filteredCompanyList$;

  onSort(field: keyof Company) {
    this.saveCompanyService.sortCompanies(field);
  }

  onFilterChange(filter: any) {
    this.saveCompanyService.filterCompanies(filter);
  }
}
