import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient , private router : Router) { }
  _registerUrl = `http://localhost:4200/auth/register`;
_loginUrl = `http://localhost:4200/auth/login`;
_userUrl = `http://localhost:4200/auth/current-user`;
_profileUrl = `http://localhost:4200/profile`;
private _usersURL = `http://localhost:4200/auth/system-users`;
private _userDataURL = `http://localhost:4200/auth/user-main-data`;

private imageChangeUrl = `http://localhost:4200/profile/userprofile/changeprofileimage`;
private newImageUrl = `http://localhost:4200/profile/userprofile/setprofileimage`;
private contactUrl = `http://localhost:4200/contacts/new-mail`;
private errorHandler : ErrorHandler = new ErrorHandler() ;

registerUser(registrationInfo: any ): Observable<any> {
  return this.http.post<any>(this._registerUrl, registrationInfo);
}

login(user: any) : Observable<any>{
  return this.http.post<any>(this._loginUrl, user);
}

getCurrentUser( user : any)  {
  
    return this.http.get<any>(`${this._userUrl}` , user);

}

getAllUsers() {
  
    return this.http.get<any>(this._usersURL);
  
}
prepareUserData(){
  
}





// This methods are not APIS
isLoggedIn() : boolean {
  return !!localStorage.getItem("token");
}

getToken() { 
  return localStorage.getItem("token");
}

userLogout() {
  this.router.navigate(["/auth/login"]);
  return localStorage.removeItem("token");
}

 



}


