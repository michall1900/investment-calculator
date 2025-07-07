import { Component, output, signal } from '@angular/core';
import { type Investment } from '../investment.model';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone:false
})
export class UserInputComponent {
  
  investmentSubmitted = output<Investment>();

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  

  constructor(){
    this.resetValues();
  }
  onSubmit(){
    console.log("submited");
    this.investmentSubmitted.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    })
    
    this.resetValues();
  }

  private resetValues(){
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }

}
