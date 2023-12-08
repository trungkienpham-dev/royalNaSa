import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from 'src/app/core/models/product.model';
import { outstandingProducts } from 'src/assets/data-fake/card-combo';

@Injectable({
  providedIn: 'root'
})
export class IntroduceService {

  getOutStandingProduct(): Observable<product[]> { //danh sách sản phẩm nổi bật
    return of(outstandingProducts)
  }
  constructor() { }

}
