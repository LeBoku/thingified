import { EventEmitter } from '@angular/core/src/facade/async';
import { Output } from '@angular/core/src/metadata/directives';
import { Thing } from '../../models/thing.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'tng-overview-thing',
    templateUrl: './thing.html',
    styleUrls: ['./thing.scss']
})
export class OverviewThingComponent {
    @Input() thing: Thing;
    @Output() onDeleted = new EventEmitter();
    showDetails = true;

    deleteThing(thing: any) {
        thing.$thing.delete().then(() => this.onDeleted.emit());
    }
}