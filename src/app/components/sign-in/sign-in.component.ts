import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  submitted = false;
  loading = false;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() { }

  login(username, password) {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    this.loading = true;
    this.authService.login(username, password)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['members']);
            },
            error => {
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