import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { VersionDialogComponent } from '../version-dialog/version-dialog.component';

@Component({
  selector: 'app-logo',
  template: `
    <!-- Company logo -->
    <img
      (dblclick)="openVersionDialog()"
      src="../../assets/senacor_transparent.png"
      class="logo"
      alt="Senacor"
    />
  `,
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openVersionDialog(): void {
    this.dialog.open(VersionDialogComponent, {
      autoFocus: false
    });
  }

}
