import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Thing } from '../models/thing.model';
import { BackendService } from '../_shared/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tng-form',
  templateUrl: './thingForm.html',
  styleUrls: ['./thingForm.scss']
})
export class FormComponent {
  @Input() thing: Thing

  @Output() onSaved = new EventEmitter();

  constructor(
    private backendService: BackendService
  ) {
    this.thing = this.thing || new Thing();
  }

  saveThing() {
    if (this.thing._id) {
      this.thing.$self.update().then(() => this.onSaved.emit());
    } else {
      this.backendService.backend.$things.post(this.thing).then(() => this.onSaved.emit());
    }
  }
}