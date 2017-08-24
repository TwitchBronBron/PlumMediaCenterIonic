import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api';

@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html'
})
export class AdminPage {

    constructor(
        public navCtrl: NavController,
        public api: Api
    ) {

    }

}
