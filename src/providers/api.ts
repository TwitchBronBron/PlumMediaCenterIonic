import { Http2, Http2Factory } from './http2-factory';
import { Injectable } from '@angular/core';
import { config } from '../../config';
import { Movie } from '../interfaces/movie';

@Injectable()
export class Api {
    constructor(http2Factory: Http2Factory) {
        this.http2 = http2Factory.create(config.apiUrl);
    }
    private http2: Http2;

    public movies = {
        getAll: async () => {
            return await this.http2.get<Movie[]>('api/movies');
        }
    };
}