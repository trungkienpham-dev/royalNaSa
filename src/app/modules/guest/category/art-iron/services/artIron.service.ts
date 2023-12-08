import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { satMyThuat } from 'src/assets/data-fake/card-combo';
import { product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ArtIronService {

  getLstSMT(): Observable<product[]> {
    return of(satMyThuat)
  }
  constructor() { }
}
