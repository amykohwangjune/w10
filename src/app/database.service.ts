import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  createSender(aSender:any){
    return this.http.post('/sender', aSender, httpOptions);
  }

  getAllSenders(){
    return this.http.get('/senders');
  }

  deleteSender(aSenderID:any){
    return this.http.delete('/sender/' + '?senderID=' + aSenderID);
  }

  addParcel(aParcel:any){
    return this.http.put('/sender/addParcel', aParcel, httpOptions);
  }

  getAllParcels(){
    return this.http.get('/parcels');
  }
}
