import { UtilService } from '../util.service';
import { Response } from '@angular/http';
import { Ressource } from './ressource';
import * as _ from 'lodash';

export class RestAnalyzer {
    private config = {
        linksKey: '_links',
        itemsKey: '_items',
        specialChar: '$'
    }

    constructor(
        private http: any,
        private util: UtilService
    ) {

    }

    analyzeData(data: any) {
        let ressources: Ressource[] = [];
        Object.keys(data).forEach((key: string) => {
            let value = data[key];

            if (key === this.config.linksKey) {
                ressources.push(...this.extractRessources(key, value, data));
            } else if (this.shouldInvestigateKey(key, value)) {
                if (_.isArray(data[key])) {
                    data[key].forEach((item: any, index: number) => {
                        return data[key][index] = this.analyzeData(data[key][index])
                    });
                }
            }
        });

        data[this.config.specialChar + 'ressources'] = ressources;

        ressources.forEach(ressource => {
            data[this.config.specialChar + ressource.name] = ressource;
        });

        return data;
    }

    private shouldInvestigateKey(key: string, data: any) {
        let shouldInvestigate = false;
        shouldInvestigate = shouldInvestigate || key === this.config.itemsKey;

        return shouldInvestigate;
    }

    private extractRessources(key: string, data: any, container: any) {
        let ressources = [];

        Object.keys(data).forEach(key => {
            if (_.isArray(data[key])) {
                data[key].forEach(resource => ressources.push(new Ressource(this.http, this.util, this, key, resource, container)));
            } else {
                ressources.push(new Ressource(this.http, this.util, this, key, data[key], container));
            }
        });

        return ressources;
    }
}