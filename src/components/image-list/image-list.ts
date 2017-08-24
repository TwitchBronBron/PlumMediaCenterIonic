import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-list',
    templateUrl: 'image-list.html'
})
export class ImageListComponent {

    constructor() {
    }
    @Input()
    public set urls(value) {
        console.log(value);
        this._urls = value;
    }
    public get urls() {
        return this._urls;
    }
    private _urls: string[];
}