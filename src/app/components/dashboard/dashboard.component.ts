import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { UsersService } from "../../shared/services/users.service";
import { Router } from "@angular/router";
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
    
    
  }

}
