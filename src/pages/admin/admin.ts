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
    public isCheckingStatus: boolean = false;

    public get generateLibraryButtonIsVisible() {
        return this.isLibGenRequestProcessing === false &&
            this.isCheckingStatus === false;
    }

    /**
     * anytime the page is activated
     */
    public ionViewDidEnter() {
        this.monitorStatus();
    }

    public isLibGenRequestProcessing = false;

    public async generateLibrary() {
        this.isLibGenRequestProcessing = true;
        await timeoutAsync(1000);
        this.libraryStatus = await this.api.library.generate();
        this.monitorStatus();
        this.isLibGenRequestProcessing = false;
    }

    public async monitorStatus() {
        if (this.isCheckingStatus == false) {
            this.isCheckingStatus = true;
            if (this.libraryStatus) {
                this.libraryStatus.state = undefined;
            }
            await timeoutAsync(1000);
            this.libraryStatus = await this.api.library.getStatus();
            while (this.libraryStatus && this.libraryStatus.isProcessing) {
                this.libraryStatus = await this.api.library.getStatus();
                await timeoutAsync(500);
            }
            this.isCheckingStatus = false;
        }
    }

    public get dateDifference() {
        if (!this.libraryStatus || !this.libraryStatus.lastGeneratedDate) {
            return undefined;
        }
        var lastDate = new Date(this.libraryStatus.lastGeneratedDate);
        var now = new Date();
        var milliseconds = now.getTime() - lastDate.getTime();
        var seconds = Math.floor(milliseconds / 1000)
        milliseconds = milliseconds - (seconds * 1000);
        //get the total number of minutes
        var minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60)
        var hours = Math.floor(minutes / 60);
        minutes = minutes - (hours * 60);
        var days = Math.floor(hours / 24);
        hours = hours - (days * 24)

        var parts = [];
        if (days > 0) {
            parts.push(`${days} ${(days === 1 ? 'day' : 'days')}`);
        }
        if (hours > 0) {
            parts.push(`${hours} ${(hours === 1 ? 'hour' : 'hours')}`);
        }
        if (minutes > 0) {
            parts.push(`${minutes} ${(minutes === 1 ? 'minute' : 'minutes')}`);
        }
        if (parts.length === 0 && (seconds > 0 || milliseconds > 0)) {
            parts.push('less than a minute');
        }
        var result = parts.join(' ');
        return result;
    }

    public sources: Source[];

}
