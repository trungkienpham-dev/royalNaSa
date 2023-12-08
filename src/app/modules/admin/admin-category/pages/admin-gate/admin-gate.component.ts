import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { satMyThuat } from 'src/assets/data-fake/card-combo';

@Component({
  selector: 'app-admin-gate',
  templateUrl: './admin-gate.component.html',
  styleUrls: ['./admin-gate.component.scss']
})
export class AdminGateComponent implements OnInit {
  items: any[] = [];

  columnConfig: ColumnConfig[] = [
    {
      key: 'title',
      header: 'Tên sản phẩm'
    },
    {
      key: 'desc',
      header: 'Mô tả ngắn'
    }
  ]

  ngOnInit() {
    this.items =  satMyThuat
  }

  onClick(){

  }
}
