import { Component, EventEmitter, Output} from '@angular/core';
import { Company } from '../../../interfaces/company.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.scss'
})
export class CompanySortComponent {
  @Output() sortField = new EventEmitter<keyof Company>();
  sort(field: keyof Company) {
    this.sortField.emit(field)
  }
}
