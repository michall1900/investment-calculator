import { Component, Output } from '@angular/core';
import { Investment } from '../investment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  

  onSubmit(){
    console.log("submited");
    console.log(this.initialInvestment + this.annualInvestment, this.expectedReturn, this.duration);
  }


}
