import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  // private apiUrl = 'http://localhost:8080/entities'
  private apiUrl = `${environment.apiURL}/entities`

  findListQA(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  constructor(
    private http: HttpClient
  ) { }
}
