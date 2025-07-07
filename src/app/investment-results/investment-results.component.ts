import { Component } from '@angular/core';
import { AnnualData } from '../investment.model';
import { InvestmentService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(public investmentsResultsService: InvestmentService){}

  get investmentResults(): ReadonlyArray<AnnualData> | undefined{

    return this.investmentsResultsService.getAnnualData();
  }
  
}
