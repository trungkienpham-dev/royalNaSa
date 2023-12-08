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
  ){}
  lstSMT: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.artIronService
      .getLstSMT()
      .pipe()
      .subscribe((item: any) => {
        this.lstSMT = item
      })
  }
  onDetail(item: string){
    this.router.navigate([`category/sat-my-thuat/${item}`])
  }
}
