import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-zone-constructor',
  templateUrl: './zone-constructor.component.html',
  styleUrls: ['./zone-constructor.component.css']
})
export class ZoneConstructorComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  changeLanguage(ln){
    this.translate.use(ln);
  }

}
