import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login-page/login-page.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: '',
            redirectTo: 'login', // ตั้งค่า path ว่าง ให้แสดง page ไหน
            pathMatch: 'full',
        },
        {
            path: '**',
            component: LoginComponent,
        },
    ],

}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
