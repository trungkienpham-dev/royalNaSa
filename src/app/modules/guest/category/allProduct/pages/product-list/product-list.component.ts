import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../../services/allProduct.service';
import { product } from 'src/app/core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    private allProductService: AllProductService
  ) { }
  lstSMT: any[] = [] //list sắt mỹ thuật
  lstNK: any[] = [] //List nhôm kính

  ngOnInit(): void {
    this.getListSMT()
    this.getListNK()
  }
  getListSMT() {  //Lấy danh sách sản phẩm sắt mỹ thuật
    this.allProductService
      .findLst('SAT_MY_THUAT')
      .pipe()
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.lstSMT = data
      })
  }
  getListNK() {  //Lấy danh sách sản phẩm nhôm kính
    this.allProductService
      .findLst('NHOM_KINH')
      .pipe()
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.lstNK = data
      })
  }
  onDetailSMT(item: any) {
    this.router.navigate([`category/sat-my-thuat/${item.name}`])
  }
  onDetailNK(item: any) {
    this.router.navigate([`category/nhom-kinh/${item.name}`])
  }
}
