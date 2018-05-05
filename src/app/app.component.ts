import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <ul>
      <li *ngFor="let car of cars" [ngClass]="{notInStock : car.total == 0}">{{car.name}}</li>
    </ul> 
  `,
  styles:[
    `.notInStock {
      background-color: red 
    }`
  ]
})
export class NameComponent implements OnInit {
  constructor() { }
  cars = [
    {
      name : 'Mercedes',
      total : 0
    },
    {
      name : 'BMW',
      total : 2
    },
    {
      name : 'Node',
      total : 2
    },
    {
      name : 'Honda',
      total : 32
    }
  ];
  ngOnInit(): void { }  
}
