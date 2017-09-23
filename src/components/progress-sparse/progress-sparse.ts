import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'progress-sparse',
    templateUrl: 'progress-sparse.html'
})
export class ProgressSparseComponent {

    constructor() {
    }
    @Input()
    public min: number;

    @Input()
    public max: number;

    @Input()
    public lower: number;

    @Input()
    public upper: number;

    @Input()
    public unit?: string;

    public get innerLeftPercent() {
        var zeroedMax = this.max - this.min;
        var zeroedLower = this.lower - this.min;
        var val = (zeroedLower / zeroedMax) * 100;
        if (!isNaN(val) && val >= 0) {
            return val + '%';
        } else {
            return '0%';
        }
    }

    public get innerRightPercent() {
        var zeroedMax = this.max - this.min;
        var zeroedUpper = this.upper - this.min;
        var val = (zeroedUpper / zeroedMax) * 100;
        if (!isNaN(val) && val <= 100) {
            return val + '%';
        } else {
            return '100%';
        }
    }
}