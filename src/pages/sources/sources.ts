import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Source } from '../../interfaces/source';
import { Alerter } from '../../providers/alerter';
import { Loader } from '../../providers/loader';
import { Toaster } from '../../providers/toaster';

@Component({
    selector: 'page-sources',
    templateUrl: 'sources.html'
})
export class SourcesPage {

    constructor(
        public navCtrl: NavController,
        public api: Api,
        public alerter: Alerter,
        public loader: Loader,
        public toaster: Toaster
    ) {
        this.init();
    }
    private async init() {
        this.sources = await this.api.sources.getAll();
    }

    public async save() {
        var hideSave = () => { }, hideLibgen = () => { };
        try {
            hideSave = this.loader.showForMinimum('Saving sources')
            await this.api.sources.setAll(this.sources);
            await hideSave();
            var libgenPromise = this.api.library.generate();

            await this.alerter.alert('Video sources have been changed. The library must now be regenerated?');
            hideLibgen = this.loader.showForMinimum('Launching library generator');
            await libgenPromise;
            await hideLibgen();
            //go back to the previous page
            this.navCtrl.pop();
        } catch (e) {
            await hideSave();
            await hideLibgen();
            this.alerter.alert('There was an error saving sources: ' + e.message);
        }

    }

    public sources: Source[];

}