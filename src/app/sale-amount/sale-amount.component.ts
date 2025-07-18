import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css'
})
export class SaleAmountComponent {
  saleAmount: string = '';
  calculateTax() {
    const namber  = Number(this.saleAmount.replace(/,/g, ''));
    if(namber === 0){
      this.saleAmount = '';
      return;
    }
    const tax = namber * 0.07;
    this.taxAmount.emit(tax);
    this.saleAmount = namber.toLocaleString('en-US',{minimumFractionDigits: 0, maximumFractionDigits: 0});

  }
@Output() taxAmount = new EventEmitter<number>();

  
}
