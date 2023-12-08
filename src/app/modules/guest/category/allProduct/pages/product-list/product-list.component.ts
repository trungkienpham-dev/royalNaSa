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
  ){}
  lstSMT: product[] = [] //list sắt mỹ thuật
  lstNK: product[] = [] //List nhôm kính

  ngOnInit(): void {
    this.getListSMT()
    this.getListNK()
  }
  getListSMT() {  //Lấy danh sách sản phẩm sắt mỹ thuật
    this.allProductService
      .getSMTProduct()
      .pipe()
      .subscribe((item: any) => {
        this.lstSMT = item
      })
  }
  getListNK() {  //Lấy danh sách sản phẩm nhôm kính
    this.allProductService
      .getNKProduct()
      .pipe()
      .subscribe((item: any) => {
        this.lstNK = item
      })
  }
  onDetail(item: any){
    this.router.navigate([`category/${item.path}`])
  }
}
