import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminQuotationService } from '../../services/adminQuotation.service';
import { detailQuotation } from '../../models/admin-quotation.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-quotaion-detail',
  templateUrl: './admin-quotaion-detail.component.html',
  styleUrls: ['./admin-quotaion-detail.component.scss']
})
export class AdminQuotaionDetailComponent implements OnInit {
  constructor(
    protected fb: FormBuilder,
    private quotationService: AdminQuotationService,
    private activatedRoute: ActivatedRoute
  ) { }

  idAPI: number = 0
  phoneNumber: string = ''
  lstQuotation: [] = []
  item: detailQuotation = {
    isConnect: false,
    name: '',
    phoneNumber: '',
    add: '',
    noteOfCustomer: '',
    note: ''
  }
  isDisplayAlertSuccess: string = 'none';
  formInfo!: FormGroup;
  buildForm() {
    this.formInfo = this.fb.group({
      isConnect: [false],
      name: [this.item.name],
      phoneNumber: [this.item.phoneNumber],
      add: [this.item.add],
      noteOfCustomer: [this.item.noteOfCustomer],
      note: [null]
    })
  }

  ngOnInit(): void {
    this.buildForm()
    this.phoneNumber = this.activatedRoute.snapshot.params['phoneNumber']
    this.findListQuotation()
  }

  findListQuotation() {
    this.quotationService
      .findListQuotation('LIST_QUOTATION')
      .subscribe((data: any) => {
        this.idAPI = data[0].id
        this.lstQuotation = JSON.parse(data[0].data)
        const result = this.lstQuotation.filter((item: any) => item.phoneNumber == this.phoneNumber)
        this.item = result[0]
        this.formInfo.patchValue(this.item)
      })
  }

  submitForm() {
    let formVal: any[] = this.lstQuotation.filter((item: any) => item.phoneNumber !== this.formInfo.value.phoneNumber)
    formVal = [
      ...formVal,
      this.formInfo.value
    ]
    this.createQuotation(formVal)
  }

  createQuotation(val: any) {
    let body = {
      name: 'LIST_QUOTATION',
      data: JSON.stringify(val)
    }

    this.quotationService
      .createFormQuotation(this.idAPI, body)
    this.isDisplayAlertSuccess = 'flex'
    setTimeout(() => {
      this.isDisplayAlertSuccess = 'none'
    }, 5000);
  }
}
