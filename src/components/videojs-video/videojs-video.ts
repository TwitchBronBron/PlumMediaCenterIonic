import { Component, Input, Output, EventEmitter } from '@angular/core';
import videojs from 'video.js';

@Component({
    selector: 'videojs-video',
    templateUrl: 'videojs-video.html'
})
export class VideojsVideoComponent {
    private static indexCounter = 1;
    constructor() {
        this.id = 'video_' + VideojsVideoComponent.indexCounter++;
    }
    /**
     * The html id for the video element
     */
    public id: string;

    /**
     * The url to the video
     */
    @Input()
    public url: string;

    /**
     * A url to the video's poster or backdrop
     */
    @Input()
    public poster: string;

    ngAfterViewInit() {
        var element = document.getElementById(this.id);
        var self = this;
        var player = videojs(element, {
            poster: this.poster
        }, () => {


        });
    }

}