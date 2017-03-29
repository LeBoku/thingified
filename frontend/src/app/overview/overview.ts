import { Ressource } from '../_shared/_restExplorer/ressource';
import { ThingsService } from '../_shared/things.service';
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
    private thingsService: ThingsService
  ) {
    this.loadThings();
  }

  loadThings() {
    return this.thingsService.loadThings().then(list => this.things = list);
  }

  onThingAdded() {
    this.loadThings();
    this.isShowingForm = false;
  }
}
