import { Component, computed, inject } from '@angular/core';
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

  private investmentsResultsService = inject(InvestmentService);
  

  investmentResults = computed(() => this.investmentsResultsService.annualData())
  
  
}
