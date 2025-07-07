import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from './../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {

  initialInvestment!: string;
  annualInvestment!: string;
  expectedReturn!: string;
  duration!: string;
  

  constructor(private investmentService: InvestmentService){
    this.resetValues();
  }
  onSubmit(){
    console.log("submited");
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
    
    this.resetValues();
  }

  private resetValues(){
    this.initialInvestment = '0';
    this.annualInvestment = '0';
    this.expectedReturn = '5';
    this.duration = '10';
  }


}
