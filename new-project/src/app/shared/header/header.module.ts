import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared.module";
import {MenuComponent} from "./components/menu/menu.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  // declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class HeaderModule { }
