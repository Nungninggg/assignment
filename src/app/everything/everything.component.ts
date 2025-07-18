import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilingTypeComponent } from '../filingtype/filingtype.component';
import { SaleAmountComponent } from '../sale-amount/sale-amount.component';
import { TaxAmountComponent } from '../tax-amount/tax-amount.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-everything',
  standalone: true,
  imports: [
            RouterOutlet,
            FilingTypeComponent,
            SaleAmountComponent,
            TaxAmountComponent,
            CommonModule,
            FormsModule
  ],
  templateUrl: './everything.component.html',
  styleUrl: './everything.component.css'
})
export class EverythingComponent {
  currentStep = 1;

  goToStep(step: number) {
    this.currentStep = step;
  }
}
