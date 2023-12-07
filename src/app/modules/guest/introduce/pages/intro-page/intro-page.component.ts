import { Component } from '@angular/core';
import { IntroduceService } from '../../services/introduce.service';
import { product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {
  constructor(
    private introduceService: IntroduceService
  ){}
  outStandingProduct: product[] = [] //list sắt mỹ thuật
  ngOnInit(): void {
    this.getOutStandingProduct()
  }
  getOutStandingProduct() {  //Lấy danh sách sản phẩm sắt mỹ thuật
    this.introduceService
      .getOutStandingProduct()
      .pipe()
      .subscribe((item: any) => {
        this.outStandingProduct = item
      })
  }
}
