import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <!-- Company logo -->
    <img
      src="../../assets/senacor_transparent.png"
      class="logo"
      alt="Senacor"
    />
  `,
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
