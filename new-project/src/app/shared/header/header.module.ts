import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import {routes} from '../../routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,  {scrollPositionRestoration: 'top'})
  ],
  declarations: [MenuComponent, HeaderComponent],
  exports: [HeaderComponent, RouterModule]
})
export class HeaderModule { }
