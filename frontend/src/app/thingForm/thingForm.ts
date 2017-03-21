import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Thing } from '../models/thing.model';
import { BackendService } from '../_shared/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tng-form',
  templateUrl: './thingForm.html',
  styleUrls: ['./thingForm.scss']
})
export class FormComponent {
  thing: Thing

  @Output() onCreated = new EventEmitter();

  constructor(
    private backendService: BackendService
  ) {
    this.thing = new Thing();
  }

  saveThing() {
    this.backendService.backend.$things.post(this.thing).then(() => this.onCreated.emit());
  }
}