import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlGlassService {

  private apiUrl = 'http://localhost:8080/entities'

  findCategory() {
    return this.http.get(`${this.apiUrl}?name=CATEGORY`)
  }

  findLstNK(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  findCrrNK(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  updateCrrNK(id: number, body: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, body)
      .subscribe((data) => { })
  }

  constructor(
    protected http: HttpClient,
  ) { }
}
