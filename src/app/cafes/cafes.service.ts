import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafesService {

  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo3.json'

  constructor(private http: HttpClient) { }

  obtenerCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl)
  }
}
