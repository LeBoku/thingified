import { BaseRequestOptions } from '@angular/http/src/base_request_options';
import { RequestOptionsArgs } from '@angular/http';
import { RestAnalyzer } from './restAnalyzer';
import { constants } from '../../app.constants';
import { Http } from '@angular/http';

export class Ressource {
    title: string;
    rel: string;
    relativeHref: string;
    href: string;

    name: string;
    httpConfig: RequestOptionsArgs

    constructor(
        private http: Http,
        private analyzer: RestAnalyzer,
        private key: string,
        private info: any,
        data: any
    ) {
        this.setUpInfo(key, info);
        this.setUpName();
        this.setUpHttpConfig(data);
    }

    get() {
        return this.http.get(this.href, this.httpConfig).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    delete() {
        return this.http.delete(this.href, this.httpConfig).toPromise();
    }

    post(data: any) {
        return this.http.post(this.href, data, this.httpConfig).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    private setUpHttpConfig(data: any) {
        this.httpConfig = new BaseRequestOptions();
        this.httpConfig.headers.append('content-type', 'application/json');
        this.httpConfig.headers.append('If-Match', data._etag);

    }

    private setUpName() {
        this.name = this.title;
    }

    private setUpInfo(key: string, info: any) {
        this.rel = key;
        this.title = info.title.toLowerCase();

        this.relativeHref = info.href;
        this.href = constants.BACKEND_URL + '/' + this.relativeHref;
    }
}