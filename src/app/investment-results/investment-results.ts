import { Component, Input } from '@angular/core';
import { AnnualData } from '../investment.model';
import { InvestmentService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {

  constructor(public investmentsResultsService: InvestmentService){}

  get investmentResults(): AnnualData[] | undefined{

    return this.investmentsResultsService.getAnnualData();
  }
  
}
