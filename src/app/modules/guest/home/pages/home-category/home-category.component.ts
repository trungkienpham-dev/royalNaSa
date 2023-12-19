import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { product } from 'src/app/core/models/product.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  lstSMT: any[] = [] //list sắt mỹ thuật
  lstNK: any[] = [] //List nhôm kính

  ngOnInit(): void {
    this.getListSMT()
    this.getListNK()
  }
  getListSMT() {  //Lấy danh sách sản phẩm sắt mỹ thuật
    this.homeService
      .findLstSMT('SAT_MY_THUAT')
      .pipe()
      .subscribe((item: any) => {
        this.lstSMT = JSON.parse(item[0].data)
      })
  }
  getListNK() {  //Lấy danh sách sản phẩm nhôm kính
    this.homeService
      .findLstSMT('NHOM_KINH')
      .pipe()
      .subscribe((item: any) => {
        this.lstNK = JSON.parse(item[0].data)
      })
  }
  onDetailSMT(item: any) {
    this.router.navigate([`category/sat-my-thuat/${item.name}`])
  }
  onDetailNK(item: any) {
    this.router.navigate([`category/nhom-kinh/${item.name}`])
  }
  images = [
    { path: 'https://source.unsplash.com/800x600/?nature' },
    { path: 'https://source.unsplash.com/800x600/?car' },
    { path: 'https://source.unsplash.com/800x600/?moto' },
    { path: 'https://source.unsplash.com/800x600/?fantasy' },
  ]
}

