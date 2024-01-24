import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../../../interfaces/company.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SaveCompanyService } from '../../../services/save-company.service';


@Component({
  selector: 'app-company-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.scss'
})
export class CompanyFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<keyof Company>();
  filterForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private saveCompanyService: SaveCompanyService) {}

  types: string[] = [];

  industries: string[] = [];

  ngOnInit(): void {
    this.saveCompanyService.companyList$.subscribe(companies => {
      if (companies === null) return;
      this.types = [...new Set(companies.map(company => company.type))].sort();
      this.industries = [...new Set(companies.map(company => company.industry))].sort();
    })

    this.filterForm = this.formBuilder.group({
      business_name: '',
      type: '',
      industry: '',
    })

    this.filterForm.valueChanges.subscribe(value => {
      this.filterChange.emit(value);
    })
  }
}
