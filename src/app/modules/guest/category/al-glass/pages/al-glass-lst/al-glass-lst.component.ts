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
    private alGlassService: AlGlassService
  ) { }
  lstNK: any[] = [];

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.alGlassService
      .findLstNK('NHOM_KINH')
      .pipe()
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.lstNK = data
      })
  }
  onDetail(item: string) {
    this.router.navigate([`category/nhom-kinh/${item}`])
  }
}
