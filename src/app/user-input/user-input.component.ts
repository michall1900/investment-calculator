import { Component, output, signal } from '@angular/core';
import { type Investment } from '../investment.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
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
