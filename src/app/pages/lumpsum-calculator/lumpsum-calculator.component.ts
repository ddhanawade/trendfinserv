import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lumpsum-calculator',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lumpsum-calculator.component.html',
  styleUrl: './lumpsum-calculator.component.scss',
  standalone: true
})
export class LumpsumCalculatorComponent {
  activeSection: string = 'lumpsum';

  // LUMPSUM Calculator properties
  initialPrincipal: number = 0;
  annualReturn: number = 0;
  investmentTenure: number = 0;
  futureValue: number = 0;

  showSection(section: string) {
    this.activeSection = section;
  }

  calculateLumpSum() {
    const rate = this.annualReturn / 100;
    this.futureValue = this.initialPrincipal * Math.pow(1 + rate, this.investmentTenure);
  }
}
