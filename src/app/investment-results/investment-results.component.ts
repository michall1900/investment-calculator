import { Component, input } from '@angular/core';
import { AnnualData } from '../investment.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone:false
})
export class InvestmentResultsComponent {

  
  investmentResults = input<AnnualData[] | undefined>()
  
  
}
