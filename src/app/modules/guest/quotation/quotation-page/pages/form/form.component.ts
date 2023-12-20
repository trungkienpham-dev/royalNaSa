import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuotationService } from '../../services/quotation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    protected fb: FormBuilder,
    private quotationService: QuotationService
  ) { }
  idAPI: number = 0;
  lstQuotation: string = ''
  isDisplayAlertErr: string = 'none';
  isDisplayAlertSuccess: string = 'none';

  formQuotation!: FormGroup;
  buildForm() {
    this.formQuotation = this.fb.group({
      name: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      add: [null, Validators.required],
      noteOfCustomer: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.buildForm()
    this.findListQuotation()
  }

  findListQuotation() {
    this.quotationService
      .findListQuotation('LIST_QUOTATION')
      .subscribe((data: any) => {
        this.idAPI = data[0].id
        this.lstQuotation = JSON.parse(data[0].data)
      })
  }

  submitForm() {
    if (this.formQuotation.status == 'INVALID') {
      this.isDisplayAlertErr = 'flex'
      setTimeout(() => {
        this.isDisplayAlertErr = 'none'
      }, 5000);
    }
    if (this.formQuotation.status == 'VALID') {
      const formVal = { isConnect: false, ...this.formQuotation.value, note: '' }
      let val = [
        ...this.lstQuotation,
        formVal
      ]
      this.createQuotation(val)
    }
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
