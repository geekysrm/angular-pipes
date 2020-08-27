import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  // // Console logging properties on component load
  // constructor() {
  //   console.log(this.car);
  // }

  onHeightChange(value: string) {
    this.height = Number(value);
  }
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: string) {
    this.amount = Number(value);
  }
}
