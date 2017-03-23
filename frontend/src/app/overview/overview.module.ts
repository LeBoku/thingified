import { OverviewThingComponent } from './thing/thing';
import { ThingFormModule } from '../thingForm/thingForm.module';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview';

@NgModule({
    declarations: [
        OverviewComponent,
        OverviewThingComponent
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