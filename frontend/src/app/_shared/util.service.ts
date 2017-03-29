import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    clone(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }
}