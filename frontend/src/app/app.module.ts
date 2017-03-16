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
    OverviewModule
  ],
  providers: [BackendService, RestExplorer],
  bootstrap: [AppComponent]
})
export class AppModule { }
