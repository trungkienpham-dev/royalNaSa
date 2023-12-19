import { Component, OnInit } from '@angular/core';
import { ArtIronService } from '../../services/artIron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-iron-lst',
  templateUrl: './art-iron-lst.component.html',
  styleUrls: ['./art-iron-lst.component.scss']
})
export class ArtIronLstComponent implements OnInit {
  constructor(
    private router: Router,
    private artIronService: ArtIronService
  ) { }
  lstSMT: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.artIronService
      .findLstSMT('SAT_MY_THUAT')
      .pipe()
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.lstSMT = data
      })
  }
  onDetail(item: string) {
    this.router.navigate([`category/sat-my-thuat/${item}`])
  }
}
