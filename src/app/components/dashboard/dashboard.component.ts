import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { UsersService } from "../../shared/services/users.service";
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[];
  constructor(
    public authService: AuthService,
    public usersService: UsersService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { 
    console.log('DashboardComponent')
    this.usersService.users().pipe(first())
    .subscribe(
        data => {
          console.log('users', data)
          this.users = data;
        },
        error => {
          console.log('error', error)
          if (error && error.error && error.error.message && error.error.message.length > 0) {
            alert(error.error.message[0].messages[0].message);
          }
          else 
          {
            alert('error');
          }
          
          //this.alertService.error(error);
          
        });
  }

}
