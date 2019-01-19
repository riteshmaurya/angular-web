import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retail-login',
  templateUrl: './retail-login.component.html',
  styleUrls: ['./retail-login.component.css']
})
export class RetailLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  inValidLogin: Boolean = false;
  signIn(credentials){
    this.authService.login(credentials).subscribe(result=>{
      this.router.navigate(['/']);
      if(result){
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      }else{
        this.inValidLogin = true;
      }

    });
  }

}
