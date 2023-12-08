import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlGlassService } from '../../servies/all-glass.service';

@Component({
  selector: 'app-al-glass-lst',
  templateUrl: './al-glass-lst.component.html',
  styleUrls: ['./al-glass-lst.component.scss']
})
export class AlGlassLstComponent implements OnInit {
  constructor(
    private router: Router,
    private allGlassService: AlGlassService
  ){}
  lstNK: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.allGlassService
      .getLstNK()
      .pipe()
      .subscribe((item: any) => {
        this.lstNK = item
      })
  }
  onDetail(item: string){}
}
