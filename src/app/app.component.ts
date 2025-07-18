import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilingTypeComponent } from './filingtype/filingtype.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import {NgModel, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EverythingComponent } from './everything/everything.component';
import {PagetwoComponent} from './pagetwo/pagetwo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FilingTypeComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    EverythingComponent,
    CommonModule, PagetwoComponent, ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  page: boolean = true;

    title = 'assignment';

    currentStep = 1;

    goToStep(step: number) {
      this.currentStep = step;
    }

  }



