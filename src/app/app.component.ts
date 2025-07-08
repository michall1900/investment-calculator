import { Component } from '@angular/core';
import { AnnualData, Investment } from './investment.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})

export class AppComponent {
  
  annualData?: AnnualData[] 

  onSubmitInvestment(investment:Investment) {
    const annualData = [];
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue - investment.annualInvestment * year - investment.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year,
      });

      
    }
    this.annualData = annualData;
  }
  
}
