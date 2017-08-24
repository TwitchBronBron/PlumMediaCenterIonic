import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'string-list',
    templateUrl: 'string-list.html'
})
export class StringListComponent {

    constructor() {
    }
    @Input()
    public items: string[];

    @Input()
    public comparisonItems: string[];

    @Input()
    public buttonType: 'add' | 'remove';
    @Output()
    public buttonClick = new EventEmitter<string>();

    public click(url: string) {
        this.buttonClick.emit(url);
    }

    public isInUse(value: string) {
        return this.comparisonItems && this.comparisonItems.indexOf(value) > -1;
    }
}