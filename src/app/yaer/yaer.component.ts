import { Component } from '@angular/core';

@Component({
  selector: 'app-yaer',
  standalone: true,
  imports: [],
  templateUrl: './yaer.component.html',
  styleUrl: './yaer.component.css'
})
export class YaerComponent {
  years: number[] = [];
  selectedYear: number | null = null;

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 10; year--) {
      this.years.push(year);

    }
  }
}
