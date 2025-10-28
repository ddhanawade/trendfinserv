import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-services',
  imports: [CommonModule],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.scss',
  standalone: true
})
export class OtherServicesComponent {
  activeSection: string = 'pms';

  showSection(section: string) {
    this.activeSection = section;
  }
}
