import { Component, OnInit } from '@angular/core';
import { AdminQAService } from '../../services/adminQA.service';
import { ColumnConfig } from 'src/app/core/models/column-config.model';
import { logWarning } from '@ckeditor/ckeditor5-utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-qa-pages',
  templateUrl: './admin-qa-pages.component.html',
  styleUrls: ['./admin-qa-pages.component.scss']
})
export class AdminQaPagesComponent implements OnInit {
  constructor(
    private qaService: AdminQAService,
    private fb: FormBuilder
  ) { }

  formQA!: FormGroup;
  lstQA: { Q: string, A: string }[] = [];
  idAPI: number = 0
  isVisible = false;
  isDisplayAlertErr: string = 'none'
  isDisplayAlertSuccess: string = 'none'

  buildForm() {
    this.formQA = this.fb.group({
      Q: [null, Validators.required],
      A: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.buildForm()
    this.findLstQA()
  }
  findLstQA() {
    this.qaService
      .findListQA('QA')
      .subscribe((data: any) => {
        this.idAPI = data[0].id
        this.lstQA = JSON.parse(data[0].data)
      })
  }

  updateLstQA(val: any) {
    let body = {
      name: 'QA',
      data: JSON.stringify(val)
    }
    this.qaService
      .createFormQuotation(this.idAPI, body)
    this.findLstQA()
    this.findLstQA()
    // -----------------------------
    this.isDisplayAlertSuccess = 'flex'
    setTimeout(() => {
      this.isDisplayAlertSuccess = 'none'
    }, 5000);
  }
  onDelete(item: any) {
    let newLst = this.lstQA.filter((i) => i !== item)
    this.updateLstQA(newLst)
  }

  onShowModal() {
    this.isVisible = true;
  }
  onCreate() {
  }

  handleOk(): void {
    if (this.formQA.status == 'INVALID') {
      this.isDisplayAlertErr = 'block'
    } if (this.formQA.status == 'VALID') {
      this.isDisplayAlertErr == 'none'
      let val = [
        ...this.lstQA,
        this.formQA.value
      ]
      this.updateLstQA(val)
      this.isVisible = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  subcribeValueChange() {
    console.log('Form:', this.formQA.value);
    console.log('Data:', this.lstQA);


  }
}
