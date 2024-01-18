import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyItemComponent } from './company-item/company-item.component';
import { GetDataService } from '../../get-data.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CompanyItemComponent, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {
  protected companies: Company[] | undefined;
  isLoading = false;

  constructor(private getDataService: GetDataService) { }

  async ngOnInit() {
    this.isLoading = true;
    (await this.getDataService.getCompanies(100)).subscribe(
      (data: Company[]) => {
        this.companies = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error: ', error);
        this.isLoading = false;
      }
    );

  } 
}
