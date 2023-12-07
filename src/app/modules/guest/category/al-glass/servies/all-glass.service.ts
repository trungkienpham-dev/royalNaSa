import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { nhomkinh } from 'src/assets/data-fake/card-combo';
import { product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AlGlassService {

  getLstNK(): Observable<product[]> {
    return of(nhomkinh)
  }
  constructor() { }
}
