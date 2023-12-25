import { Component, OnInit, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminSmtService } from '../../services/adminSmt.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dataCrrSMT } from '../../models/adminSmtModels';
import { HttpClient } from '@angular/common/http';

// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NzModalService } from 'ng-zorro-antd/modal';
import { pipe, skipLast } from 'rxjs';

@Component({
  selector: 'app-smt-detail',
  templateUrl: './smt-detail.component.html',
  styleUrls: ['./smt-detail.component.scss'],
})
export class SmtDetailComponent implements OnInit {
  formDesc!: FormGroup;
  Editor = ClassicEditor;
  model = {
    editorData: ''
  };
  isDisableDesc: boolean = true;
  isDisableUrlImg: boolean = true;
  isDisableDescDetail: boolean = true;
  isDisplayAlert = 'none'

  newImageSrc: string = '';

  name: string = '';
  data: dataCrrSMT = {
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
    private adminSMTService: AdminSmtService,
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
    this.findCrrSmt()
  }

  findCrrSmt() {
    this.adminSMTService
      .findCrrSmt(this.name)
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
    let val: dataCrrSMT = {
      ...this.data,
      title: this.formDesc.value.name || this.data.title,
      desc: this.formDesc.value.desc || this.data.desc,
    }
    this.updateCrrSmt(val)
  }
  updateCrrSmt(val: dataCrrSMT) {
    let body = {
      name: this.name,
      data: JSON.stringify(val)
    }

    this.adminSMTService
      .updateCrrSmt(this.idCrrSmt, body)
    this.findCrrSmt()
    this.findCrrSmt()
    // ---------------------
    this.isDisplayAlert = 'flex'
    setTimeout(() => {
      this.isDisplayAlert = 'none'
    }, 3000);
  }

  onSaveDesc() {
    let val: dataCrrSMT = {
      ...this.data,
      content: this.model.editorData
    }
    this.updateCrrSmt(val);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    let val: dataCrrSMT = {
      ...this.data,
      imageLst: [...this.data.imageLst, this.newImageSrc],
    }
    this.updateCrrSmt(val);
    this.findCrrSmt()
    this.findCrrSmt()
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

        let val: dataCrrSMT = {
          ...this.data,
          imageLst: newImgLst,
        }
        this.updateCrrSmt(val);
        this.findCrrSmt()
      },
      nzCancelText: 'No',
      nzOnCancel: () => { }
    });
  }
}
