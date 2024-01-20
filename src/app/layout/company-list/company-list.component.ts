import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyItemComponent } from './company-item/company-item.component';
import { Company } from '../../interfaces/company.interface';
import { SaveCompanyService } from '../../services/save-company.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CompanyItemComponent, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent{
  
  constructor(private saveCompanyService: SaveCompanyService) { }
  isLoading$ = this.saveCompanyService.isLoading$;

  companyList$ = this.saveCompanyService.companyList$.pipe(
    tap(companyList => {
      if (companyList === null) {
        this.saveCompanyService.saveCompanies(50);
      }
    }),
  );

}
