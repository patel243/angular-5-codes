import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
  <button [disabled]="isDisabled" (click)="someAction()">Regular Button<button>
  <button (click)="changeDisabled()">{{isDisabled}}</button>
  `
})
export class NameComponent implements OnInit {
  isDisabled:boolean = true;
  someAction(){
    alert('hello here I am max');
  }
  changeDisabled(){
    this.isDisabled = !this.isDisabled;
  }
  constructor() { }

  ngOnInit(): void { }
}
