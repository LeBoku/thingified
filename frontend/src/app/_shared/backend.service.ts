import { Injectable } from '@angular/core';
import { constants } from '../app.constants';
import { RestExplorer } from './restExplorer.service';

@Injectable()
export class BackendService {
    backend: any;

    constructor(
        restExplorer: RestExplorer
    ) {
        this.backend = restExplorer.fromHref(constants.BACKEND_URL).then(backend => this.backend = backend);
    }
}