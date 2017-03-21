import { ThingFormModule } from '../thingForm/thingForm.module';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        BrowserModule,
        ThingFormModule
    ],
    exports: [
        OverviewComponent
    ],
    providers: [],
})
export class OverviewModule { }