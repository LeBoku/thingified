import { FormModule } from '../form/form.module';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        BrowserModule,
        FormModule
    ],
    exports: [
        OverviewComponent
    ],
    providers: [],
})
export class OverviewModule { }