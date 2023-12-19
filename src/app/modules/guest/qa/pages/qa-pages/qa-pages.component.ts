import { Component, OnInit } from '@angular/core';
import { QAService } from '../../services/qa.service';

@Component({
  selector: 'app-qa-pages',
  templateUrl: './qa-pages.component.html',
  styleUrls: ['./qa-pages.component.scss']
})
export class QaPagesComponent implements OnInit {

  constructor(
    private qaService: QAService
  ) { }
  lstQA: { Q: string, A: string }[] = [];
  ngOnInit() {
    this.findLstQA()
  }
  findLstQA() {
    this.qaService
      .findListQA('QA')
      .subscribe((data: any) => {
        this.lstQA = JSON.parse(data[0].data)
      })
  }
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      name: 'This is panel header 3'
    }
  ];
}

