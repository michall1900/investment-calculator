import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from "./user-input/user-input";
import { InvestmentResultsComponent } from "./investment-results/investment-results";
import { AnnualData, Investment } from './investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput, InvestmentResultsComponent]
})

export class AppComponent {
  
  annualData = signal<AnnualData[] | undefined>(undefined)

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
    this.annualData.set(annualData);
  }
  
}
