import { Component, OnInit } from '@angular/core';
import { version } from '../../../../../package.json';

@Component({
  template: `
    <h2 mat-dialog-title>{{ 'version.title' | translate }}</h2>
    <p mat-dialog-content>{{ 'version.frontend.title' | translate }}{{frontendVersion}}</p>
    <p mat-dialog-content>{{ 'version.backend.title' | translate }}{{backendVersion}}</p>
    <button mat-button [mat-dialog-close] color="primary">{{ 'version.cancel' | translate | uppercase }}</button>
  `,
  styleUrls: ['./version-dialog.component.css']
})
export class VersionDialogComponent implements OnInit {

  frontendVersion;
  backendVersion;

  constructor() {
    this.frontendVersion = version;
    this.backendVersion = 'todo';
  }

  ngOnInit(): void {
  }

}
