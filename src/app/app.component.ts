import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from "./user-input/user-input";
import { InvestmentResultsComponent } from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput, InvestmentResultsComponent]
})

export class AppComponent {

  isCalculated: boolean = false;

  onSubmitInvestment(){
    this.isCalculated = true;  
  }
}
