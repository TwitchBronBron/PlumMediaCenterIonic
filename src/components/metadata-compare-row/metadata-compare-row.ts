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
}
