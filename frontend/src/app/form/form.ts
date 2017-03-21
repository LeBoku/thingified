import { Thing } from '../models/thing.model';
import { BackendService } from '../_shared/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tng-form',
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class FormComponent {
  thing: Thing

  constructor(
    private backendService: BackendService
  ) {
    this.thing = new Thing();
  }

  saveThing() {
    this.backendService.backend.$things.post(this.thing);
  }
}