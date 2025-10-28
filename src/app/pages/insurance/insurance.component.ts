import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurance',
  imports: [CommonModule],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss',
  standalone: true
})
export class InsuranceComponent {
  activeSection: string = 'insurance';

  showSection(section: string) {
    this.activeSection = section;
  }
}
