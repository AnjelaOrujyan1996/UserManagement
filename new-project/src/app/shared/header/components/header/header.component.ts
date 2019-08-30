import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor() { }
  @Output() valueChange = new EventEmitter();

  changeLanguage(ln) { // You can give any function name
    this.valueChange.emit(ln);
  }


}
