import { ReposoI } from '../interface/reposo-i';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RepososSService {
  private apiURL = 'http://localhost:8000/consultar-reposo';

  constructor(private http:HttpClient) { }


  getReposo(): Observable<ReposoI[]>
  {
      return this.http.get<ReposoI[]>(this.apiURL);
  }
}
