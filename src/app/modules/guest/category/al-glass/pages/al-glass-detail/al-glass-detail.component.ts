import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlGlassService } from '../../servies/all-glass.service';
import { CrrNK } from '../../models/card-combo';

@Component({
  selector: 'app-al-glass-detail',
  templateUrl: './al-glass-detail.component.html',
  styleUrls: ['./al-glass-detail.component.scss']
})
export class AlGlassDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alGlassService: AlGlassService
  ) { }

  desc: string = '';
  menuItems: any[] = [];
  category = this.menuItems.find(obj => obj.id === '3');
  productLst = this.category?.children;

  name: string = '';
  data: CrrNK = {
    id: '',
    content: '',
    desc: '',
    image: '',
    imageLst: [],
    path: '',
    title: ''
  };
  image: string = this.data.imageLst[0];
  images: any[] = [];
  array = [1, 2, 3, 4];
  effect = 'scrollx';

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name']
    this.findCrrSmt()
    this.findCategory()
  }

  selectChild(parent: any, child: any) {
    if (parent.name === 'SAT_MY_THUAT') {
      this.router.navigate([`category/sat-my-thuat/${child.path}`])
      this.name = child.path
      this.findCrrSmt()
    }
    if (parent.name === 'NHOM_KINH') {
      this.router.navigate([`category/nhom_kinh/${child.path}`])
      this.name = child.path
      this.findCrrSmt()
    }
  }

  findCrrSmt() {
    this.alGlassService
      .findCrrNK(this.name)
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.data = data
        this.image = data.imageLst[0]
        this.images = data.imageLst.map((str: any) => ({ path: str }));
        this.desc = this.data.content
      })
  }

  findCategory() {
    this.alGlassService.findCategory()
      .subscribe((item: any) => {
        this.menuItems = JSON.parse(item?.[0]?.data);
      })
  }

  handleItemClick(e: any) {
    if (e.target.nodeName === 'IMG') {
      this.image = e.target.currentSrc
    }
  }
}
