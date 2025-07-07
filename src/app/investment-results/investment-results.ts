import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AnnualData } from '../investment.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {

  
  investmentResults = input<AnnualData[] | undefined>()
  
  
}
