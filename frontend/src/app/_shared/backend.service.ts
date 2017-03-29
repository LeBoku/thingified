import { Ressource } from './_restExplorer/ressource';
import { Injectable } from '@angular/core';
import { constants } from '../app.constants';
import { RestExplorer } from './restExplorer.service';

@Injectable()
export class BackendService {
    things: Ressource;
    promise: Promise<any>;

    constructor(
        restExplorer: RestExplorer
    ) {
        this.promise = restExplorer.fromHref(constants.BACKEND_URL).then(backend => this.things = backend.$things);
    }
}