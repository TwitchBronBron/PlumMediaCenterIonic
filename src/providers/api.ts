import { Http2, Http2Factory } from './http2-factory';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { Movie } from '../interfaces/movie';
import { MovieMetadataComparison, MovieMetadata } from '../interfaces/movie-metadata-comparison';
import { MovieMetadataSearchResult } from '../interfaces/movie-metadata-search-result';
import { LibraryGenerationStatus } from '../interfaces/library-generation-status';
import { Source } from '../interfaces/source';
import { MediaType } from '../interfaces/media-type';

@Injectable()
export class Api {
    constructor(http2Factory: Http2Factory, config: Config) {
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
        },
        /**
         * Save the movie metadata. This will completely replace all metadata items for this movie on disk
         */
        save: async (movieId: number, metadata: MovieMetadata) => {
            return await this.http2.post(`api/metadata/movies/${movieId}`, metadata);
        }
    }
    public mediaType = {
        /**
         * Get a list of all possible media types
         */
        getAll: async () => {
            return await this.http2.get<MediaType[]>('api/media/mediaTypes');
        }
    }

    public library = {
        /**
         * Start the library generation process. The return 
         */
        generate: async () => {
            return await this.http2.get<LibraryGenerationStatus>('api/library/generate');
        },
        getStatus: async () => {
            return await this.http2.get<LibraryGenerationStatus>('api/library/status');
        },
        /**
         * Process an item by its media id. This can be any media type
         */
        process: async (mediaId: number) => {
            return await this.http2.post('api/library/processItem', null, { mediaId });
        }
    }

    public sources = {
        getAll: async () => {
            return await this.http2.get<Source[]>('api/sources');
        },

        /**
         * Save this list as the full list of sources
         */
        setAll: async (sources: Source[]) => {
            return await this.http2.post('api/sources', sources);
        }
    }

    public database = {
        /**
         * Determine if the database is installed on the server
         */
        getIsInstalled: async () => {
            return await this.http2.get<boolean>('api/database/isInstalled');
        },
        /**
         * Install the pmc database
         */
        install: async (rootUsername: string, rootPassword: string) => {
            return await this.http2.post('api/database/install', { rootUsername, rootPassword });
        }
    }
}