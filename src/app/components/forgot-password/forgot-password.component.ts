import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  loading = false;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  forgot(username) {
    this.loading = true;
    this.authService.forgotPassword(username)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['sign-in']);
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
              this.loading = false;
            });
  }

}