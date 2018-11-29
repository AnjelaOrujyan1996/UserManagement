import { Component, OnInit,  Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Inject(DOCUMENT) document
  constructor() { }

  ngOnInit() {


  }

}
