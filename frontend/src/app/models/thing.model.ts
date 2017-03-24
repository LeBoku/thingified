import { Ressource } from '../_shared/_restExplorer/ressource';

export class Thing {
    public $thing: Ressource;
    public _id: string;

    constructor(
        public name: string = '',
        public description: string = '',
    ) { }
}