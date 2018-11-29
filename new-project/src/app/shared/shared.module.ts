import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [FooterComponent],
  exports: [HeaderModule, FooterComponent],
})
export class SharedModule { }
