import { Component } from '@angular/core';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { satMyThuat } from 'src/assets/data-fake/card-combo';
import { AdminSmtService } from '../../services/adminSmt.service';

@Component({
  selector: 'app-smt-lst',
  templateUrl: './smt-lst.component.html',
  styleUrls: ['./smt-lst.component.scss']
})
export class SmtLstComponent {
  constructor(
    private adminSMTService: AdminSmtService
  ) { }
  category = 'sat-my-thuat'
  items: any[] = [];
  path: string = ''
  columnConfig: ColumnConfig[] = [
    // {
    //   key: 'img',
    //   header: 'Ảnh'
    // },
    {
      key: 'title',
      header: 'Tên sản phẩm'
    }

  ]

  ngOnInit() {
    this.adminSMTService
      .findLstSMT('SAT_MY_THUAT')
      .subscribe((item: any) => {
        this.path = item[0].name
        this.items = JSON.parse(item?.[0]?.data)
      })
  }

  onClick() { }
}
