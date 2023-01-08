import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// service de livraison
export class MatchService {

  //matchURL : BE server Adress

  matchURL: string ="http://localhost:3000/matches";

  // HttpClient : module d'envoie de Req (request) 
  // en reception de Res (response)

  constructor(private http: HttpClient) { }

  getAllMatches() {
    return this.http.get<{x:any}>(this.matchURL);
  }

  displayMatchById(id) {
    return this.http.get<{x:any}>(`${this.matchURL}/${id}`);
    // return this.http.get (this.matchURL + `/${id}`);
  }
  
 
  addMatch(obj : any) {
    return this.http.post<{message:string}> (this.matchURL, obj);
  }
  
  editMatch(obj) {
    return this.http.put (`${this.matchURL}/${obj.id}`, obj);
  }

  // Request to delete object by ID ( Response : message)

  deleteMatchById(id) {
    return this.http.delete<{message:string}>(`${this.matchURL}/${id}`);
  }

}
