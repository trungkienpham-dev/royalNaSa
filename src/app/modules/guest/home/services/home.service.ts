import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8080/entities'

  findLstSMT(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  findCrrSmt(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }
  constructor(
    protected http: HttpClient
  ) { }

}
