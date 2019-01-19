import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retail-login',
  templateUrl: './retail-login.component.html',
  styleUrls: ['./retail-login.component.css']
})
export class RetailLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  inValidLogin: Boolean = false;
  signIn(credentials){
    this.authService.login(credentials).subscribe(result=>{
      this.router.navigate(['/']);
      if(result){
        this.router.navigate(['/']);
      }else{
        this.inValidLogin = true;
      }

    });
  }

}
