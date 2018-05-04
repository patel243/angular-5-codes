import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<p> My name is {{name}}</p>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Define all the application variables here pertaining to the component
  name: string = 'Rocky';

  constructor() { 
    setTimeout(() => {
      this.name = 'Arnav'
    },1000);
  }

  ngOnInit(): void { }
}
