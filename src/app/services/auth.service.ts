import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials) {
    return this.httpClient.post("/api/authenticate", 
      credentials).pipe(map(response=>{
          let result: any = response;
          if(result && result.token){
            localStorage.setItem('token', result.token);
            return true;
          }
          return false;
        })
        );
  }

  isLoggedIn(){
  
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    //console.log(token);
    if(!token)
    return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    console.log("expirationDate", expirationDate);
    console.log("isExpired", isExpired);
    return !isExpired;
  }

  logout() {
    console.log("logout");
    localStorage.removeItem('token');
  }
}
