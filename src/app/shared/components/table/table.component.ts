import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
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
  @Input() data: any[] = [];
  @Input() showIndex: boolean = false;
  @Input() displayedColumns: ColumnConfig[] = [];
  keyColumn: string[] = [];

  ngOnInit() {
    if(this.displayedColumns){
      // console.log('displayedColumns', this.displayedColumns.map((item) => item.key));
      this.keyColumn = this.displayedColumns.map((item) => item.key)
    }
  }
  onEdit(item: any) {}
}
