import {HostListener} from '@angular/core';
import { Thing } from '../../models/thing.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'tng-overview-thing',
    templateUrl: './thing.html',
    styleUrls: ['./thing.scss']
})
export class OverviewThingComponent {
    @Input() thing: Thing;
    showDescription = false;

    @HostListener('click', [])
    onClick(){
        this.showDescription = !this.showDescription;
    }
}