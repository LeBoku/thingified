import { Injectable } from '@angular/core';
import { constants } from '../app.constants';
import { RestExplorer } from './restExplorer.service';

@Injectable()
export class BackendService {
    backend: any;
    backendPromise: Promise<any>;

    constructor(
        restExplorer: RestExplorer
    ) {
        this.backendPromise = restExplorer.fromHref(constants.BACKEND_URL).then(backend => this.backend = backend);
    }
}