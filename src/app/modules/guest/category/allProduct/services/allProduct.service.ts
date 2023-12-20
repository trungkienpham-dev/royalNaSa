import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from 'src/app/core/models/product.model';
import { nhomkinh, satMyThuat } from 'src/assets/data-fake/card-combo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  // private apiUrl = 'http://localhost:8080/entities'
  private apiUrl = `${environment.apiURL}/entities`

  findLst(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }
  constructor(
    protected http: HttpClient
  ) { }

}
