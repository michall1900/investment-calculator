import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone:false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentsResultsService = inject(InvestmentService);
  

  investmentResults = computed(() => this.investmentsResultsService.annualData())
  
  
}
