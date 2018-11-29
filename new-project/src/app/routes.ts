import {Routes} from '@angular/router';

import {OverviewComponent} from './pages/overview/overview.component'
import {UserManagementComponent} from './pages/user-management/user-management.component'
import {ZoneConstructorComponent} from './pages/zone-constructor/zone-constructor.component'
import {SettingsComponent} from './pages/settings/settings.component'

export const routes: Routes = [
  {
    path: '', redirectTo: 'overview', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent,
  },
  {
    path: 'userManagement', component: UserManagementComponent,
  },
  {
    path: 'zoneConstructor', component: ZoneConstructorComponent,
  },
  {
    path: 'settings', component: SettingsComponent,
  }
];
