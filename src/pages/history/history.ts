import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Api } from "../../providers/api";
import { Util } from "../../providers/util";
import { Alerter } from "../../providers/alerter";
import { MediaProgress } from "../../interfaces/media-progress";
import { Config } from "../../config/config";
import { MediaHistoryRecord } from "../../interfaces/media-history-record";

@Component({
    selector: 'page-history',
    templateUrl: 'history.html'
})
export class HistoryPage {
    constructor(
        public navCtrl: NavController,
        public api: Api,
        public config: Config,
        private util: Util,
        private alerter: Alerter
    ) {

    }

    ionViewDidLoad() {
        this.index = 0;
        this.posterFolderUrl = `${this.config.apiUrl}/posters/`;
        this.size = 50;
        this.historyRecords = [];
        //load the first page of info
        this.loadMore();
    }

    private index: number;
    private size: number;
    public posterFolderUrl: string;
    public historyRecords: MediaHistoryRecord[];

    public async loadMore() {
        var more = await this.api.media.getHistory(this.index, this.size);
        this.index += this.size;
        //append items to the end of the list
        this.historyRecords.push.apply(this.historyRecords, more);
    }
}
