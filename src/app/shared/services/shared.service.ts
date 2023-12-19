import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { detailQuotation } from 'src/app/modules/admin/admin-quotation/models/admin-quotation.models';

@Injectable({
  providedIn: 'root'
})
export class sharaDataService {

  private messageSource = new BehaviorSubject<object>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: object) {
    this.messageSource.next(data);

    // if (this.messageSource.value !== data) {
    //   this.messageSource.next(data);
    // }
  }
}
