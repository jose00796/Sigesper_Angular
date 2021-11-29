import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NominaI } from '../interface/nomina-i';

@Injectable({
  providedIn: 'root'
})
export class NominaSService {
  private apiURL = 'http://localhost:8000/consultar-nomina';
  
  constructor(private http:HttpClient) { }
 
  getNomina(): Observable<NominaI[]>
  {
      return this.http.get<NominaI[]>(this.apiURL);
  }
}
