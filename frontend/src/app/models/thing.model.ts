import { Ressource } from '../_shared/_restExplorer/ressource';

export class Thing {
    public $self: Ressource;
    public _id: string;

    constructor(
        public name: string = '',
        public description: string = '',
    ) { }
}