import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
    
  private authApiBase: string = 'http://localhost:1337';
  
  constructor(
    private httpClient: HttpClient,    
    public authService: AuthService,
  ) {    

  }

  // Sign in with email/password
  users() {
    return this.httpClient.get<any>(`${this.authApiBase}/users`, 
      { headers: {
        Authorization: `Bearer ${this.authService.authToken}`,
      }})
      .pipe(map(response => {
          return response;
      }));
  }

  me() {
    return this.httpClient.get<any>(`${this.authApiBase}/users/me`, 
      { headers: {
        Authorization: `Bearer ${this.authService.authToken}`,
      }})
      .pipe(map(response => {
          return response;
      }));
  }

}