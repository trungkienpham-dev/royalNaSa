import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminSmtService {

  private apiUrl = 'http://localhost:8080/entities'

  findLstSMT(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  findCrrSmt(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  updateCrrSmt(id: number, body: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, body)
      .subscribe((data) => { })
  }
  constructor(
    protected http: HttpClient,
  ) { }
}
