import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { satMyThuat } from 'src/assets/data-fake/card-combo';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['admin/quotation'])
  }
}
