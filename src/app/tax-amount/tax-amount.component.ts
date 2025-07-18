import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css'
})
export class TaxAmountComponent {
  @Input() beforeTax: string = '';


  taxAmount: string = '';
  tableTax: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['beforeTax']) {
      if(this.beforeTax === '0.00' || !this.beforeTax){
        this.beforeTax = '';
      }else{
        this.taxAmount = this.beforeTax;
        this.tableTax = Number(this.beforeTax.replace(/,/g, ''));
      }
    }
  }


}
