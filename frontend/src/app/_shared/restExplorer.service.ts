import { UtilService } from './util.service';
import { RestAnalyzer } from './_restExplorer/restAnalyzer';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestExplorer {
    private analyzer: RestAnalyzer;

    constructor(
        private http: Http,
        private util: UtilService
    ) {
        this.analyzer = new RestAnalyzer(this.http, this.util);
    }

    fromHref(href: string) {
        return this.http.get(href).map(data => data.json()).toPromise().then(data => this.analyzer.analyzeData(data));
    }
}