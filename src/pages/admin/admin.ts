import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { LibraryGenerationStatus } from '../../interfaces/library-generation-status';
import { timeoutAsync } from '../../classes/timeout-async';
import { Source } from '../../interfaces/source';

@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html'
})
export class AdminPage {

    constructor(
        public navCtrl: NavController,
        public api: Api
    ) {
        this.init();
    }
    private async init() {
        this.monitorStatus();
        this.sources = await this.api.sources.getAll();
    }
    public libraryStatus: LibraryGenerationStatus;

    public async generateLibrary() {
        this.libraryStatus = await this.api.library.generate();
        this.monitorStatus();
    }

    public async monitorStatus() {
        this.libraryStatus = await this.api.library.getStatus();
        while (this.libraryStatus && this.libraryStatus.state !== 'completed' && this.libraryStatus.state !== 'failed') {
            this.libraryStatus = await this.api.library.getStatus();
            await timeoutAsync(500);
        }
    }

    public sources: Source[];
    
}
