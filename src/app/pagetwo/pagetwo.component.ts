import { Component } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  standalone: true,
  imports: [],
  templateUrl: './pagetwo.component.html',
  styleUrl: './pagetwo.component.css'
})
export class PagetwoComponent {
  currentStep = 1;

  goToStep(step: number) {
    this.currentStep = step;
  }
}

