import { Thing } from '../models/thing.model';
import { Ressource } from './_restExplorer/ressource';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ThingsService {
    constructor(
        private backend: BackendService
    ) {

    }

    loadThings() {
        return this.backend.promise.then(() => {
            return this.backend.things.get().then(things => things);
        });
    }
}