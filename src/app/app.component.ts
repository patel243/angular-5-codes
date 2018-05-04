import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <button (click)="toggleVisible()">{{visible}}</button>
    <p *ngIf="visible ; else hidden">I am visible now</p>
    <ng-template #hidden><p>I am hidden boss!!</p></ng-template>
    `
})
export class AppComponent implements OnInit {

  // Initial state of the button
  visible:boolean = false;
  toggleVisible() {
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit(): void { }
}
