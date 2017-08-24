import { Component, Input, Output, EventEmitter } from '@angular/core';

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

    @Input()
    public buttonType: 'add' | 'remove';

    @Input()
    public allowReorder: boolean;

    @Output()
    public buttonClick = new EventEmitter<string>();

    public addRemoveClick(url: string) {
        this.buttonClick.emit(url);
    }

    /**
     * Move a url forward or backwards
     * @param url 
     * @param forward 
     */
    public reorder(url: string, forward = true) {
        var idx = this.urls.indexOf(url);
        var newIndex = idx + (forward ? 1 : -1);
        if (newIndex >= this.urls.length) {
            var k = newIndex - this.urls.length;
            while ((k--) + 1) {
                this.urls.push(undefined);
            }
        }
        this.urls.splice(newIndex, 0, this.urls.splice(idx, 1)[0]);
    }
}