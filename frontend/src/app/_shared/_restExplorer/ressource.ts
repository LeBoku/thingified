import { RestAnalyzer } from './restAnalyzer';
import { constants } from '../../app.constants';
import { Http } from '@angular/http';

export class Ressource {
    title: string;
    rel: string;
    relativeHref: string;
    href: string;

    name: string;

    constructor(
        private http: Http,
        private analyzer: RestAnalyzer,
        private key: string,
        private info: any
    ) {
        this.setUpInfo(key, info);
        this.setUpName();
    }

    get() {
        return this.http.get(this.href).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    post(data: any) {
        return this.http.post(this.href, data).toPromise()
            .then(data => this.analyzer.analyzeData(data.json()));
    }

    private setUpName() {
        this.name = this.title;
    }

    private setUpInfo(key: string, info: any) {
        this.rel = key;
        this.title = info.title;

        this.relativeHref = info.href;
        this.href = constants.BACKEND_URL + '/' + this.relativeHref;
    }
}