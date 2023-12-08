import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from 'src/app/core/models/product.model';
import { nhomkinh, satMyThuat } from 'src/assets/data-fake/card-combo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getSMTProduct(): Observable<product[]> { //danh sách sản phẩm sắt mỹ thuật
    return of(satMyThuat)
  }
  getNKProduct(): Observable<product[]> { //danh sách sản phẩm nhôm kính
    return of(nhomkinh)
  }
  constructor() { }

}
