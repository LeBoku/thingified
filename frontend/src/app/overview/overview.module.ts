import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        OverviewComponent
    ],
    providers: [],
})
export class OverviewModule { }