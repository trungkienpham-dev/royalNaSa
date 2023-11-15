import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { satMyThuat } from 'src/assets/data-fake/card-combo';
import { CardProduct } from '../models/card-combo';

@Injectable({
  providedIn: 'root'
})
export class GateService {

  getCardList(): Observable<CardProduct[]> {
    return of(satMyThuat)
  }
  constructor() { }
}
