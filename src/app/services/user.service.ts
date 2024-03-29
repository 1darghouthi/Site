import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsersById(id: any) {
    throw new Error('Method not implemented.');
  }
  getUserById(id: any) {
    throw new Error('Method not implemented.');
  }


  userURL : string ="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

// response : Array of objects
  getAllUsers(){
    return this.http.get<{users: any}>(this.userURL);
  }
  //response : user object
  getUserProfile(id){
    return this.http.get(`${this.userURL}/${id}`);
  }

  // response : message (OK, NOK)
  deleteUser(id){
    return this.http.delete(`${this.userURL}/${id}`);
  }

  //user: new object to send
  editProfile(user){
    return this.http.put(this.userURL, user);

  }

  //Add User
  signup(user){
    return this.http.post<{message: string}>(`${this.userURL}/signup`, user);
  }

  //Login (to connect)
  login(user){
    return this.http.post<{user:any, message: string}>(`${this.userURL}/login` , user);
  }
}
