import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template:  `
    <div [ngSwitch]="count">
    <p *ngSwitchCase="5">
      Count is 5
    </p>
    <p *ngSwitchCase="10">
      Count is 10
    </p>
    <p *ngSwitchDefault>
      Count is default
    </p>
    </div>
  `
})
export class AppComponent implements OnInit {
  count:number = 5;
  constructor() { }

  ngOnInit(): void { }
}
