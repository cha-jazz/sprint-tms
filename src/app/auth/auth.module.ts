import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponentModule } from './login-page/login-page.component.module';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    AuthRoutingModule,
    LoginComponentModule,
  ],
  declarations: [
    AuthComponent,
  ],
})
export class AuthModule {
}
