import { Component } from '@angular/core';

@Component({
  selector: 'tng-overview',
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss']
})
export class OverviewComponent {
  title = 'overview works!';

  addThing(){
    alert('add some things');
  }
}
