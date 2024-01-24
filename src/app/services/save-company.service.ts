import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { GetDataService } from './get-data.service';
import { BehaviorSubject, Subject, finalize, first } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SaveCompanyService {

  constructor(private getDataService: GetDataService) {
    this.companyList$.pipe(first()).subscribe(companyList => {
      if (companyList === null) {
        this.saveCompanies(50);
      }
    });
  }

  private companyListSubject = new BehaviorSubject<Company[] | null>(null);
  companyList$ = this.companyListSubject.asObservable();

  private filteredCompanyListSubject = new BehaviorSubject<Company[]>([]);

  get filteredCompanyList$() {
    return this.filteredCompanyListSubject.asObservable();
  }

  private _isLoading = new Subject<boolean>();
  isLoading$ = this._isLoading.asObservable();

  saveCompanies(count: number) {
    this._isLoading.next(true);
    this.getDataService.getCompanies(count).pipe(
      finalize(() => this._isLoading.next(false))
    ).subscribe(
      (data: Company[]) => {
        this.companyListSubject.next(data);
        this.filteredCompanyListSubject.next(data);
      },
      (error) => {
        console.error('An error occurred', error);
      }
    );
  }

  // getCurrentCompanies() {
  //   return this.companyListSubject.value;
  // }

  getCompanyById(id: string) {
    const companyList = this.companyListSubject.value;
    if (companyList) {
      return companyList.find(c => c.id === parseInt(id)) ?? null;
    }
    return null;
  }

  sortCompanies(field: keyof Company) {
    const companies = this.filteredCompanyListSubject.value;
    if (companies) {
      companies.sort((a, b) => a[field].toString().localeCompare(b[field].toString()));
      this.filteredCompanyListSubject.next(companies);
    }
  }

  filterCompanies(filter: any) {
    const companies = this.companyListSubject.value;
    if (companies) {
      const filteredCompanies = companies.filter(c => 
        (!filter.business_name || c.business_name.includes(filter.business_name)) &&
        (!filter.type || c.type === filter.type) &&
        (!filter.industry || c.industry === filter.industry)
      );
      this.filteredCompanyListSubject.next(filteredCompanies);
    }
  }

}