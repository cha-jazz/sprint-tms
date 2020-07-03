import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbDatepickerModule,
    NbInputModule,
    NbDialogModule,
    NbPopoverModule,
    NbSpinnerModule,
    NbToggleModule,
    NbAccordionModule,

} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LoginComponent } from './login-page.component';



@NgModule({
    imports: [
        ThemeModule,
        FormsModule,
        NbActionsModule,
        NbButtonModule,
        NbCardModule,
        NbTabsetModule,
        NbUserModule,
        NbRadioModule,
        NbSelectModule,
        NbListModule,
        NbIconModule,
        NbAccordionModule,
        HttpClientModule,
        NbInputModule,
        NbDialogModule.forChild(),
        NbPopoverModule,
        NbSpinnerModule,
        NbToggleModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        Ng2SmartTableModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatCheckboxModule,
    ],
    providers: [CookieService],
    declarations: [
        LoginComponent,
    ],

})
export class LoginComponentModule { }