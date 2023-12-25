import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { dataCrrNK } from '../../models/adminNkModels';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AdminNkService } from '../../services/adminNk.service';

@Component({
  selector: 'app-nk-detail',
  templateUrl: './nk-detail.component.html',
  styleUrls: ['./nk-detail.component.scss']
})
export class NkDetailComponent implements OnInit {
  formDesc!: FormGroup;
  Editor = ClassicEditor;
  model = {
    editorData: ''
  };
  isDisableDesc: boolean = true;
  isDisableUrlImg: boolean = true;
  isDisableDescDetail: boolean = true;

  newImageSrc: string = '';

  name: string = '';
  data: dataCrrNK = {
    id: '',
    content: '',
    desc: '',
    image: '',
    imageLst: [],
    path: '',
    title: ''
  };
  dataImg = [];
  introduce = [];
  idCrrSmt: number = 0;

  isVisible = false;

  constructor(
    protected fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private adminNKService: AdminNkService,
    protected http: HttpClient,
    private modal: NzModalService
  ) { }

  buildForm() {
    this.formDesc = this.fb.group({
      name: [this.data.title],
      desc: [this.data.desc]
    })
  }

  ngOnInit(): void {
    this.buildForm()
    this.name = this.activatedRoute.snapshot.params['name']
    this.findCrrNk()
  }

  findCrrNk() {
    this.adminNKService
      .findLstNK(this.name)
      .subscribe((item: any) => {
        let data = JSON.parse(item?.[0]?.data)
        this.data = data
        this.dataImg = data.imageLst
        this.introduce = data.content
        this.idCrrSmt = item[0].id
        this.model.editorData = this.data.content
      })
  }

  onSave() {
    let val: dataCrrNK = {
      ...this.data,
      title: this.formDesc.value.name || this.data.title,
      desc: this.formDesc.value.desc || this.data.desc,
    }
    this.updateCrrSmt(val)
  }
  updateCrrSmt(val: dataCrrNK) {
    let body = {
      name: this.name,
      data: JSON.stringify(val)
    }
    this.adminNKService
      .updateCrrNk(this.idCrrSmt, body)
  }

  onSaveDesc() {
    let val: dataCrrNK = {
      ...this.data,
      content: this.model.editorData
    }
    this.updateCrrSmt(val);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    let val: dataCrrNK = {
      ...this.data,
      imageLst: [...this.data.imageLst, this.newImageSrc],
    }
    this.updateCrrSmt(val);
    this.findCrrNk()
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showDeleteConfirm(itemDelete: any): void {
    this.modal.confirm({
      nzTitle: 'Bạn chắc chắn muốn xoá ảnh này?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        let newImgLst = this.dataImg.filter((item) => item !== itemDelete)

        let val: dataCrrNK = {
          ...this.data,
          imageLst: newImgLst,
        }
        this.updateCrrSmt(val);
        this.findCrrNk()
      },
      nzCancelText: 'No',
      nzOnCancel: () => { }
    });
  }
}
