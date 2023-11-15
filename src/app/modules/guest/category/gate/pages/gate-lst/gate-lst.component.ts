import { Component, OnInit } from '@angular/core';
import { GateService } from '../../services/gate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gate-lst',
  templateUrl: './gate-lst.component.html',
  styleUrls: ['./gate-lst.component.scss']
})
export class GateLstComponent implements OnInit {
  constructor(
    private router: Router,
    private gateService: GateService
  ){}
  listcard: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.gateService
      .getCardList()
      .pipe()
      .subscribe((item: any) => {
        this.listcard = item
      })
  }
  onDetail(item: string){
    console.log(item);
    this.router.navigate([`category/gate/${item}`])
  }
}
