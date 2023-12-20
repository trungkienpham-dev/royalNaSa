import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { satMyThuat } from 'src/assets/data-fake/card-combo';
import { product } from 'src/app/core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtIronService {

  // private apiUrl = 'http://localhost:8080/entities'
  private apiUrl = `${environment.apiURL}/entities`

  findCategory() {
    return this.http.get(`${this.apiUrl}?name=CATEGORY`)
  }

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
