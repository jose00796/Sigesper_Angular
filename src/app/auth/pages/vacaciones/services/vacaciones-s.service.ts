import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VacacionesI } from '../interface/vacaciones-i';

@Injectable({
  providedIn: 'root'
})
export class VacacionesSService {

  private apiURL = 'http://localhost:8000/consultar-vac';

  constructor(private http: HttpClient) { }

  getVac(): Observable<VacacionesI[]>
  {
      return this.http.get<VacacionesI[]>(this.apiURL);
  }
}
