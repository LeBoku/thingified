import { ThingsService } from './_shared/things.service';
import { ThingFormModule } from './thingForm/thingForm.module';
import { BackendService } from './_shared/backend.service';
import { RestExplorer } from './_shared/restExplorer.service';
import { OverviewModule } from './overview/overview.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ThingFormModule,
    OverviewModule
  ],
  providers: [BackendService, RestExplorer, ThingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
