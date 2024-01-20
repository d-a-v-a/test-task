import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { GetDataService } from './get-data.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SaveCompanyService {

  constructor(private getDataService: GetDataService) {}

  private companyListSubject = new BehaviorSubject<Company[] | null>(null);
  companyList$ = this.companyListSubject.asObservable();

  private _isLoading = new Subject<boolean>();
  isLoading$ = this._isLoading.asObservable();

  saveCompanies(count: number) {
    this._isLoading.next(true);
    this.getDataService.getCompanies(count).subscribe(
      (data: Company[]) => {
        this.companyListSubject.next(data);
      },
      (error) => {
        console.error('An error occurred', error);
      }
    );
    this._isLoading.next(false);

  }

  getCurrentCompanies() {
    return this.companyListSubject.value;
  }

  getCompanyById(id: number) {
    const companyList = this.companyListSubject.value;
    if (companyList) {
      return companyList.find(c => c.id === id);
    }
    return null;
  }
}