import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumURL: string = "http://localhost:3000/stadiums";

  constructor(private httpClient: HttpClient) { }

  addStadium(obj){
    return this.httpClient.post<{message:string}>(this.stadiumURL, obj);

  }
  getAllStadiums(){
    return this.httpClient.get<{stadiums:any}>(this.stadiumURL);
  }
  deleteStadium(id){
    return this.httpClient.delete<{message:string}>(`${this.stadiumURL}/${id}`);

  }

  getStadiumById(id){
    return this.httpClient.get<{stadium: any}>(`${this.stadiumURL}/${id}`);

  }
  editStadium(obj){
    return this.httpClient.put<{ message: string}>(this.stadiumURL, obj);

  }
}
