import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-dialog',
  template: `
      <p mat-dialog-content>todo</p>
  `,
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
