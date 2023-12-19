import { Component } from '@angular/core';
import { AdminNkService } from '../../services/adminNk.service';
import { ColumnConfig } from 'src/app/core/models/column-config.model';

@Component({
  selector: 'app-nk-lst',
  templateUrl: './nk-lst.component.html',
  styleUrls: ['./nk-lst.component.scss']
})
export class NkLstComponent {
  constructor(
    private adminNKService: AdminNkService
  ) { }
  items: any[] = [];
  path: string = '';
  category: string = 'nhom-kinh'

  columnConfig: ColumnConfig[] = [
    {
      key: 'title',
      header: 'Tên sản phẩm'
    },
  ]

  ngOnInit() {
    this.adminNKService
      .findLstNK('NHOM_KINH')
      .subscribe((item: any) => {
        this.items = JSON.parse(item?.[0]?.data)
        this.path = item[0].name
      })
  }

  onClick() { }
}
