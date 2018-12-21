import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-verify-email-message',
  templateUrl: './verify-email-message.component.html',
  styleUrls: ['./verify-email-message.component.css']
})
export class VerifyEmailMessageComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
