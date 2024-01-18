import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from './interfaces/company.interface';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private baseUrl = 'https://random-data-api.com/api/company/random_company?size=';

  constructor(private http: HttpClient) { 
  }

  async getCompanies(count: number) {
    return this.http.get<Company[]>(`${this.baseUrl}${count}`).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}

