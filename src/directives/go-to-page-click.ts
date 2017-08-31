import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { NavController } from 'ionic-angular';
import { MoviePlayPage } from '../pages/movie-play/movie-play';
import { SourcesPage } from '../pages/sources/sources';

@Directive({ selector: '[goToPageClick]' })
export class GoToPageClickDirective {
    constructor(el: ElementRef, public navCtrl: NavController) {

    }

    private pages = {
        'Sources': SourcesPage
    }

    private pageName: string;
    @Input("goToPageClick")
    public set pageNameAttr(value: string) {
        this.pageName = value;
    };

    @HostListener("click")
    click() {
        var page = this.pages[this.pageName];
        this.navCtrl.push(page, {});
    }
}