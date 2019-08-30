import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ZoneConstructorComponent } from './pages/zone-constructor/zone-constructor.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormsModule} from "@angular/forms";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    UserManagementComponent,
    ZoneConstructorComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

