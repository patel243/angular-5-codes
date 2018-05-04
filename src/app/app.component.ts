import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
  <ul>
    <li *ngFor="let car of cars; let i=index">{{i}} - {{car}}</li>
  </ul>
  `
})
export class AppComponent implements OnInit {
  // application variables goes here
  cars:string[] = [
    'Toyota',
    'Honda',
    'Ford'
  ];
  constructor() { }

  ngOnInit(): void { }
}
