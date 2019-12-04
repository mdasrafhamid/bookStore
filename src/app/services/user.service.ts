import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiEndPoint = 'http://localhost:3900/api'
  constructor(private http:HttpClient) { }

  users = {
    id: 1, 
    email: 'ma@g.com',
    name: 'asraf', 
    phone: '94899659', 
    address: 'Blk 226 Street 21', 
    city: 'pasir ris', 
    zip: '510226', 
    country: 'singapore', 
  }

  registerUser(user){
    return this.http.post(this.apiEndPoint+'/users', user)
  }

  login(user){
    return this.http.post(this.apiEndPoint+'/auth',user,{responseType:'text'})
  }
  getCurrentUser(){
    const token = localStorage.getItem('token')
    if(!token) return null;

    const helper = new JwtHelper();
    return helper.decodeToken(token)
  }
  getCUser(){
    return this.users;
  }
}
