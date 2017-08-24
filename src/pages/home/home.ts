import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Movie } from '../../interfaces/movie';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public api: Api
    ) {
        api.movies.getAll().then((movies) => {
            this.movies = movies;
        }, (err) => {

        });
    }
    public movies: Movie[];

}
