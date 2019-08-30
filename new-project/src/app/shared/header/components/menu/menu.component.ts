import {TranslateService} from '@ngx-translate/core';
import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';

import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Inject(DOCUMENT) document;
  language = "en";
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  @Output() valueChange = new EventEmitter();

  changeLanguage(ln) { // You can give any function name
    this.language = ln;
    this.valueChange.emit(ln);
  }

}
