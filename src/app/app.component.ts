import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from "./user-input/user-input";
import { type Investment } from './investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, UserInput]
})

export class AppComponent {
  onSubmitInvestment(investmentProperties: Investment){
    console.log(investmentProperties);
  }
}
