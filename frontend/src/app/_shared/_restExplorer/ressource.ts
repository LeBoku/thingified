import { UtilService } from '../util.service';
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
    extractedData: any;

    constructor(
        private http: Http,
        private util: UtilService,
        private analyzer: RestAnalyzer,
        private key: string,
        private info: any,
        data: any
    ) {
        this.setUpInfo(key, info);
        this.setUpName();
        this.setUpHttpConfig(data);
        this.extractData(data);
    }

    get() {
        return this.http.get(this.href, this.httpConfig).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    delete() {
        return this.http.delete(this.href, this.httpConfig).toPromise();
    }

    update() {
        return this.http.put(this.href, this.extractedData, this.httpConfig).toPromise().then(resp => {
            this.setETag(resp.json()._etag);
        });
    }

    post(data: any) {
        return this.http.post(this.href, data, this.httpConfig).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    private extractData(data: any) {
        this.extractedData = this.util.clone(data);
        delete this.extractedData._created;
        delete this.extractedData._links;
        delete this.extractedData._updated;
        delete this.extractedData._etag;
    }

    private setUpHttpConfig(data: any) {
        this.httpConfig = new BaseRequestOptions();
        this.httpConfig.headers.set('content-type', 'application/json');

        this.setETag(data._etag);
    }

    private setETag(eTag: string) {
        this.httpConfig.headers.set('If-Match', eTag);
    }

    private setUpName() {
        this.name = this.rel == 'self' ? this.rel : this.title;
    }

    private setUpInfo(key: string, info: any) {
        this.rel = key;
        this.title = info.title.toLowerCase();

        this.relativeHref = info.href;
        this.href = constants.BACKEND_URL + '/' + this.relativeHref;
    }
}