import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AnnualData } from '../investment.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input()
  investmentResults?: AnnualData[]
  
}
