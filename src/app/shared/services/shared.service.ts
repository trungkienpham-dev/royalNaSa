import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { detailQuotation } from 'src/app/modules/admin/admin-quotation/models/admin-quotation.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class sharaDataService {
  private messageSource = new BehaviorSubject<object>({});
  currentMessage = this.messageSource.asObservable();
  constructor(protected http: HttpClient) { }

  private apiUrl = `${environment.apiURL}/entities`


  changeMessage(data: object) {
    this.messageSource.next(data);
  }

  findCategory(name: string) {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }
}
