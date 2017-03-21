import { ThingsService } from './_shared/things.service';
import { FormModule } from './form/form.module';
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
    FormModule,
    OverviewModule
  ],
  providers: [BackendService, RestExplorer, ThingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
