import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Source } from '../../interfaces/source';

@Component({
    selector: 'page-sources',
    templateUrl: 'sources.html'
})
export class SourcesPage {

    constructor(
        public navCtrl: NavController,
        public api: Api
    ) {
        this.init();
    }
    private async init() {
        this.sources = await this.api.sources.getAll();
    }

    public sources: Source[];
    
}
