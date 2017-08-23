import { Http2, Http2Factory } from './http2-factory';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Movie } from '../interfaces/movie';
import { MovieMetadataComparison } from '../interfaces/movie-metadata-comparison';
import { MovieMetadataSearchResult } from '../interfaces/movie-metadata-search-result';

@Injectable()
export class Api {
    constructor(http2Factory: Http2Factory) {
        this.http2 = http2Factory.create(config.apiUrl);
    }
    private http2: Http2;

    public movies = {
        getAll: async () => { 
            return await this.http2.get<Movie[]>('api/movies');
        },
        getById: async (movieId: number) => {
            return await this.http2.get<Movie>(`api/movies/${movieId}`)
        }
    };

    public metadata = {
        compareMovie: async (movieId: number, tmdbId: number) => {
            return await this.http2.get<MovieMetadataComparison>('api/metadata/movies/compare', { movieId, tmdbId });
        },
        /**
         * Get a list of search results from tmdb
         */
        getMovieSearchResults: async (text: string) => {
            return await this.http2.get<MovieMetadataSearchResult[]>('api/metadata/movies/search', { text });
        }
    }
}