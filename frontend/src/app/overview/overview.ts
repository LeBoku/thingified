import { BackendService } from '../_shared/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tng-overview',
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss']
})
export class OverviewComponent {
  title = 'overview works!';
  things: any;
  isShowingForm = false;

  constructor(
    private backendService: BackendService
  ) {
    backendService.backendPromise.then(() => {
      backendService.backend.$things.get().then(things => this.things = things);
    });
  }

  onThingAdded() {
    this.backendService.backendPromise.then(() => {
      this.backendService.backend.$things.get().then(things => this.things = things);
    });
  }
}
