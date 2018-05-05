import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
  <ul>
    <li *ngFor="let car of cars" [ngStyle]="{backgroundColor: car.total > 0 ? 'green' : 'red' }">{{car.name}}</li>
  </ul>
  `
})
export class AppComponent implements OnInit {
  constructor(){

  }
  cars = [
    {
      name : 'Toyota',
      total : 1
    },
    {
      name : 'Ford',
      total : 0
    },
    {
      name : 'Honda',
      total : 2
    }
  ];
  ngOnInit(){

  }

}
