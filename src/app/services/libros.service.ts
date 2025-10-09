import { Injectable } from '@angular/core';
import { GoogleBookResponde } from '../models/google-book-responde.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  constructor(private http: HttpClient) { }

  search(term: string, maxResults: number = 10): Observable<GoogleBookResponde> {
    const parms = new HttpParams().set('q', term).set('maxResults', maxResults); 
    return this.http.get<GoogleBookResponde>(`${environment.googleBooks}/volumes`, {parms}); 
}
}
