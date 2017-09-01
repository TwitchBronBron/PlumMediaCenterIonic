import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NavController } from 'ionic-angular';
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