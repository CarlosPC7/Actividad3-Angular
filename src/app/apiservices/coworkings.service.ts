import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoworkingsService {

private url = 'assets/coworkings.json'; // URL al archivo JSON

  constructor(private http: HttpClient) {}

  getCoworkings(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
