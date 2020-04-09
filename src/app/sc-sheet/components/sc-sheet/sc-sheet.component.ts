import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-sheet',
  template: `
    <app-sc-detail></app-sc-detail>
    <!--other components of ScSheet-->
  `,
  styleUrls: ['./sc-sheet.component.css']
})
export class ScSheetComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
