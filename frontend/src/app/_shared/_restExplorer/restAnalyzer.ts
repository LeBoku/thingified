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
        public http: any
    ) {

    }

    analyzeData(data: any) {
        let ressources: Ressource[] = [];
        Object.keys(data).forEach((key: string) => {
            let value = data[key];

            if (key === this.config.linksKey) {
                ressources.push(...this.extractRessources(key, value));
            } else if (this.shouldInvestigateKey(key, value)) {
                if (_.isArray(data[key])) {
                    data[key].forEach((item: any, index: number) => {
                        return data[key][index] = this.analyzeData(data[key])
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
    }

    private extractRessources(key: string, data: any) {
        let ressources = [];

        Object.keys(data).forEach(key => {
            if (_.isArray(data[key])) {
                data[key].forEach(resource => ressources.push(new Ressource(this.http, this, key, resource)));
            } else {
                ressources.push(new Ressource(this.http, this, key, data[key]));
            }
        });

        return ressources;
    }
}