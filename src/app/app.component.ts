import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <input [(ngModel)]="name">
    <p>My name is {{name}}</p>
  `
})
export class AppComponent implements OnInit {
  name:string = 'Prateek';
  constructor() { }

  ngOnInit(): void { }
}
