import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layouts/sidebar-menu';
import { ArtIronService } from '../../services/artIron.service';
import { CrrSMT } from '../../models/card-combo';
import { filter } from 'rxjs';

@Component({
  selector: 'app-art-iron-detail',
  templateUrl: './art-iron-detail.component.html',
  styleUrls: ['./art-iron-detail.component.scss']
})
export class ArtIronDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private artIronService: ArtIronService
  ) { }

  desc: string = "";
  menuItems: any[] = [];
  category = this.menuItems.find(obj => obj.id === '3');
  productLst = this.category?.children;

  name: string = '';
  data: CrrSMT = {
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
    this.artIronService
      .findCrrSmt(this.name)
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.data = data
        this.image = data.imageLst[0]
        this.images = data.imageLst.map((str: any) => ({ path: str }));
        this.desc = this.data.content
        // this.dataImg = data.imageLst
        // this.introduce = data.content
        // this.idCrrSmt = item[0].id
        // this.model.editorData = this.data.content
      })
  }

  findCategory() {
    this.artIronService.findCategory()
      .subscribe((item: any) => {
        this.menuItems = JSON.parse(item?.[0]?.data);
      })
  }

  handleItemClick(e: any) {
    if (e.target.nodeName === 'IMG') {
      this.image = e.target.currentSrc
    }
    // Thực hiện các hành động khi click vào ảnh
  }
}
