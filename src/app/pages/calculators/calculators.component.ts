import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculators',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.scss',
  standalone: true
})
export class CalculatorsComponent {
  activeSection: string = 'sip';

  // SIP Calculator properties
  sipMonthlyInvestment: number = 0;
  sipAnnualReturn: number = 0;
  sipTenure: number = 0;
  sipTotalValue: number = 0;

  // LUMPSUM Calculator properties
  lumpSumInvestment: number = 0;
  lumpSumAnnualReturn: number = 0;
  lumpSumTenure: number = 0;
  lumpSumTotalValue: number = 0;

  showSection(section: string) {
    this.activeSection = section;
  }

  calculateSIP() {
    const monthlyRate = this.sipAnnualReturn / 12 / 100;
    const months = this.sipTenure * 12;
    
    if (monthlyRate === 0) {
      this.sipTotalValue = this.sipMonthlyInvestment * months;
    } else {
      this.sipTotalValue = this.sipMonthlyInvestment * 
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    }
  }

  calculateLumpSum() {
    const rate = this.lumpSumAnnualReturn / 100;
    this.lumpSumTotalValue = this.lumpSumInvestment * Math.pow(1 + rate, this.lumpSumTenure);
  }
}
