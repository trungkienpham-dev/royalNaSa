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
  ){}

  lstSMT: product[] = [] //list sắt mỹ thuật
  lstNK: product[] = [] //List nhôm kính

  ngOnInit(): void {
    this.getListSMT()
    this.getListNK()
  }
  getListSMT() {  //Lấy danh sách sản phẩm sắt mỹ thuật
    this.homeService
      .getSMTProduct()
      .pipe()
      .subscribe((item: any) => {
        this.lstSMT = item
      })
  }
  getListNK() {  //Lấy danh sách sản phẩm nhôm kính
    this.homeService
      .getNKProduct()
      .pipe()
      .subscribe((item: any) => {
        this.lstNK = item
      })
  }
  onDetail(item: any){
    this.router.navigate([`category/${item.path}`])
  }
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
}
