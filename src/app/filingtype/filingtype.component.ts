import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filingtype',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filingtype.component.html',
  styleUrl: './filingtype.component.css'
})
export class FilingTypeComponent {
  Filing: string = "0";

}
