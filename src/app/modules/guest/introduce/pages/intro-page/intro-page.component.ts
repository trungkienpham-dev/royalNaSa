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
    // private introduceService: IntroduceService
  ) { }
  // outStandingProduct: product[] = []
  ngOnInit(): void {
  }
}
