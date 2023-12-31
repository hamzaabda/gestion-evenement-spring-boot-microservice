import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../../models/RegisterRequest';
import { AuthResponseData } from '../../models/AuthResponseData';
import { LoginRequest } from '../../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTHURL: string;

  constructor(private http: HttpClient,
    ) {
      this.AUTHURL = environment.AUTHURL;
    }

    
    register(RegisterRequest:RegisterRequest) {
      const registerUrl = this.AUTHURL+'/register';
      return this.http.post<AuthResponseData>(registerUrl,RegisterRequest); 
    }

    login(LoginRequest:LoginRequest) {
      const loginURL = this.AUTHURL+'/login';
      return this.http.post<AuthResponseData>(loginURL,LoginRequest); 
    }


    getroles()
    {      
    
      const RoleURL = this.AUTHURL+'/getroles';
      return this.http.get<any>(RoleURL);
    }


    getuserbyemail(email:string) 
    {
      const currentuserURL = 'http://localhost:9000/api/user/adherant/getuserbyemail/'+email;
      return this.http.get<any>(currentuserURL); 
    }





}
