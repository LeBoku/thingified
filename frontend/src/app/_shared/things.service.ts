import { Thing } from '../models/thing.model';
import { Ressource } from './_restExplorer/ressource';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ThingsService {
    constructor(
        private backendService: BackendService
    ) {

    }

    loadThings() {
        return this.backendService.backendPromise.then(() => {
            return this.backendService.backend.$things.get().then(things => things);
        });
    }
}