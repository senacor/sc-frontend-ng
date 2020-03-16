import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('de');
    translateService.use('de');
  }
}
