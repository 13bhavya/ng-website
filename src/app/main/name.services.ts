import { Injectable, EventEmitter } from '@angular/core';
import { Names } from './names.model';
import { Subject } from 'rxjs';

export class NameService {
    namesChanged = new EventEmitter<Names[]>();

    private names: Names[] = [];

    addNames(name: Names) {
        this.names.push(name);
        this.namesChanged.emit(this.names.slice());
        console.log(this.names);
    }

    getNames() {
        return this.names.slice();
    }

    getName(index: number) {
        return this.names[index];
    }

    delName(index: number) {
        this.names.splice(index,1);
        this.namesChanged.emit(this.names.slice())
    }

}