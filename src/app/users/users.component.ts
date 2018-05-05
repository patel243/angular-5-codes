import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users = ['Jack','George','Max']
    constructor() { }

    ngOnInit(): void { }

    onUserCreated(name){
        this.users.push(name);
    }


}
