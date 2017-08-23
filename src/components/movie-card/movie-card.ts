import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
    selector: 'movie-card',
    templateUrl: 'movie-card.html'
})
export class MovieCardComponent {

    constructor() {

    }

    @Input("movie")
    public movie: Movie;

}
