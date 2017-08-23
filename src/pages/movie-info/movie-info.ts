import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html'
})
export class MovieInfoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: Api
  ) {
    var movieId = this.navParams.data.movieId;
    this.api.movies.getById(movieId).then((movie) => {
      this.movie = movie;
    });
  }
  public movie: Movie;


}