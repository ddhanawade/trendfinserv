import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-broking',
  imports: [CommonModule],
  templateUrl: './stock-broking.component.html',
  styleUrl: './stock-broking.component.scss',
  standalone: true
})
export class StockBrokingComponent {
  activeSection: string = 'stock-broking';

  showSection(section: string) {
    this.activeSection = section;
  }
}
