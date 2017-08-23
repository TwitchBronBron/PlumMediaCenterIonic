export interface Movie {
    id: number;
    title: string;
    sourceId: number;
    description: string;
    duration: number;
    rating?: string;
    releaseDate?: Date;
    runtime: number;
    tmdbId?: number;
    posterUrl: string;
    backdropUrl: string;
    videoUrl: string;
}


