import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header";
import { UserInputComponent } from "./user-input/user-input";
import { InvestmentResultsComponent } from "./investment-results/investment-results";
import { AppComponent } from "./app.component";

@NgModule({
  declarations:
  [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule{}