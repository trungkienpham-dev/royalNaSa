import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-gate-lst',
  templateUrl: './gate-lst.component.html',
  styleUrls: ['./gate-lst.component.scss']
})
export class GateLstComponent implements OnInit {
  constructor(
    private homeService: HomeService
  ){}
  listcard: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.homeService
      .getCardList()
      .pipe()
      .subscribe((item: any) => {
        this.listcard = item
        console.log('list', this.listcard);

      })
  }
}
