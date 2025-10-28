import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mutual-fund',
  imports: [CommonModule],
  templateUrl: './mutual-fund.component.html',
  styleUrl: './mutual-fund.component.scss',
  standalone: true
})
export class MutualFundComponent {
  activeSection: string = 'mutual-fund';

  showSection(section: string) {
    this.activeSection = section;
  }
}
