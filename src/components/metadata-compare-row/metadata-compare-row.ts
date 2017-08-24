import { Component, Input } from '@angular/core';
import { MovieMetadataComparison } from '../../interfaces/movie-metadata-comparison';

@Component({
    selector: 'metadata-compare-row',
    templateUrl: 'metadata-compare-row.html'
})
export class MetadataCompareRowComponent {

    constructor() {

    }
    @Input()
    public property: string;

    @Input()
    public type: string;

    @Input()
    public comparison: MovieMetadataComparison;

    public addImageUrl(propertyName, url) {
        var arr: string[] = this.comparison.current[propertyName];
        if (arr.indexOf(url) === -1) {
            arr.push(url)
        }
    }

    public removeImageUrl(propertyName, url) {
        var arr: string[] = this.comparison.current[propertyName];
        var idx = arr.indexOf(url);
        if (idx > -1) {
            arr.splice(idx, 1);
        }
    }
}
