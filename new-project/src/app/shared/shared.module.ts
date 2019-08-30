import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateCompiler, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HeaderComponent} from "./header/components/header/header.component";
import {MenuComponent} from "./header/components/menu/menu.component";
import {RouterModule} from "@angular/router";
import {routes} from "../routes";
import {TranslateMessageFormatCompiler} from "ngx-translate-messageformat-compiler";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes,  {scrollPositionRestoration: 'top'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
  ],
  declarations: [FooterComponent, HeaderComponent, MenuComponent],
  exports: [TranslateModule,HttpClientModule, RouterModule, HeaderComponent, FooterComponent ],
})
export class SharedModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
