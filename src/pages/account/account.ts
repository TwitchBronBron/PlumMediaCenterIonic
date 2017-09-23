import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Api } from "../../providers/api";
import { Util } from "../../providers/util";
import { Alerter } from "../../providers/alerter";

@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {
    constructor(
        public navCtrl: NavController,
        public api: Api,
        private util: Util,
        private alerter: Alerter
    ) {

    }
}
