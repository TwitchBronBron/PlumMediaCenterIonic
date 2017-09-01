import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class Alerter {
    constructor(
        private alertCtrl: AlertController
    ) {

    }

    /**
     * Show an alert popup
     */
    public alert(message: string, okText = 'Ok', title = "Confirm"): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let confirm = this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: okText,
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            confirm.present();
        });
    }

    /**
     * Show a confirm popup
     */
    public confirm(message: string, yesText = 'Yes', noText = 'No', title = "Confirm"): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let confirm = this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: yesText,
                        handler: () => {
                            resolve(true);
                        }
                    },
                    {
                        text: noText,
                        handler: () => {
                            resolve(false);
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
}
