import { Component, OnInit } from '@angular/core';
import { Calculator } from '../../../utils/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calculator = new Calculator();
  ngOnInit() {
    const multiplication = this.calculator.multiply(3,3);
    console.log(multiplication);
    const division = this.calculator.divide(3,3);
    console.log(division);
  }
}
