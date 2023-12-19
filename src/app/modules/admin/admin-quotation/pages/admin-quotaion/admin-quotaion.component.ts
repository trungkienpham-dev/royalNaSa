import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { AdminQuotationService } from '../../services/adminQuotation.service';

@Component({
  selector: 'app-admin-quotaion',
  templateUrl: './admin-quotaion.component.html',
  styleUrls: ['./admin-quotaion.component.scss']
})
export class AdminQuotaionComponent implements OnInit {
  columnConfig: ColumnConfig[] = [
    {
      key: 'name',
      header: 'Tên khách hàng'
    },
    {
      key: 'phoneNumber',
      header: 'Số điện thoại'
    },
    {
      key: 'add',
      header: 'Địa chỉ thi công'
    },
    // {
    //   key: 'note',
    //   header: 'ghi chú của nhân viên'
    // },
  ]
  items: any[] = [];
  path: string = '';

  ngOnInit() {
    this.findListQuotation()
  }
  findListQuotation() {
    this.quotationService
      .findListQuotation('LIST_QUOTATION')
      .subscribe((data: any) => {
        this.items = JSON.parse(data[0].data)
        this.path = data[0].name
      })
  }

  constructor(
    private quotationService: AdminQuotationService
  ) { }
}
