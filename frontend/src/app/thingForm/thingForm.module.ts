import { FormsModule } from '@angular/forms';
import { FormComponent } from './thingForm';

import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        FormComponent
    ],
    providers: [],
})
export class ThingFormModule { }