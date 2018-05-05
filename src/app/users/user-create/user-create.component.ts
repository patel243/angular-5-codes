import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
    name:string = '';
    
    @Output()
    onUserCreated = new EventEmitter<string>();
    onUserCreate(){
        //this function is triggered when the user clicks on the button
        //we send data to event emitter
        this.onUserCreated.emit(this.name);
    }
    
}
