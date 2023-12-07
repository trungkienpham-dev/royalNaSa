import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/core/models/product.model';
import { Img } from 'src/app/modules/guest/introduce/models/imgLst';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() data: product[] = []

  ngOnInit(): void {
  }

  selectItem(item: any) {}
}
