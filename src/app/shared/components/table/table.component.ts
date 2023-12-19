import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { sharaDataService } from '../../services/shared.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  name: string = ''
  @Input() data: any[] = [];
  @Input() showIndex: boolean = false;
  @Input() displayedColumns: ColumnConfig[] = [];
  @Input() category: string = '';
  @Input() path: string = ''
  keyColumn: string[] = [];

  ngOnInit() {
    if (this.displayedColumns) {
      this.keyColumn = this.displayedColumns.map((item) => item.key)
    }
  }

  onDetail(item: any, path: any) {
    if (path == 'SAT_MY_THUAT' || path == 'NHOM_KINH') {
      this.router.navigate([`admin/category/${this.category}/${item.name}`])
    } if (path == 'LIST_QUOTATION') {
      this.router.navigate([`admin/quotation/${item.phoneNumber}`])
    }
  }
}
