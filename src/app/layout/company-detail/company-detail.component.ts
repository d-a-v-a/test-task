 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { SaveCompanyService } from '../../services/save-company.service';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private saveCompanyService: SaveCompanyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('id');
      
    });
  }
}
