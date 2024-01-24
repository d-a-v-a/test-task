 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { SaveCompanyService } from '../../services/save-company.service';
import { Company } from '../../interfaces/company.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private saveCompanyService: SaveCompanyService) { }
  company: Company | null = null;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('id');
      if (companyId !== null) {
        this.company = this.saveCompanyService.getCompanyById(companyId);
      }
    });
  }
}
