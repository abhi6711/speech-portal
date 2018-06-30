/**
 * This file import all the material module required from @angular/material
 */
import { NgModule } from '@angular/core';
import {
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatSidenavModule
    ],
    exports: [
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: []
})
export class AppMaterialModule { }