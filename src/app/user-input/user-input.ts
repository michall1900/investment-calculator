import { Component, EventEmitter, Output } from '@angular/core';
import { type Investment } from '../investment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Output()
  investmentSubmitted = new EventEmitter<Investment>();

  initialInvestment!: string;
  annualInvestment!: string;
  expectedReturn!: string;
  duration!: string;
  

  constructor(){
    this.resetValues();
  }
  onSubmit(){
    console.log("submited");
    this.investmentSubmitted.emit({
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
