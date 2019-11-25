import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../shared/services/users.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  users: any[];
  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() {

    this.usersService.users().pipe(first())
    .subscribe(
        data => {
          this.users = data;
        },
        error => {
          //this.alertService.error(error);          
    });

  }

}
