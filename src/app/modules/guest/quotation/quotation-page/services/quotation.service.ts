import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  // private apiUrl = 'http://localhost:8080/entities'
  private apiUrl = `${environment.apiURL}/entities`

  findListQuotation(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  createFormQuotation(id: number, body: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, body)
      .subscribe((data) => { })
  }

  constructor(
    private http: HttpClient
  ) { }
}
