import { Component, input } from '@angular/core';
import { AnnualData } from '../investment.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
  standalone:false
})
export class InvestmentResultsComponent {

  
  investmentResults = input<AnnualData[] | undefined>()
  
  
}
