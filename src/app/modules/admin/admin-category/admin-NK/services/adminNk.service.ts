import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminNkService {

  // private apiUrl = 'http://localhost:8080/entities'
  private apiUrl = `${environment.apiURL}/entities`

  findLstNK(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  findCrrNk(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }

  updateCrrNk(id: number, body: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, body)
      .subscribe(data => { })
  }

  constructor(
    protected http: HttpClient,
  ) { }
}
