export interface Movie {
    id: number;
    title: string;
    sourceId: number;
    summary: string;
    description: string;
    duration: number;
    rating?: string;
    releaseDate?: Date;
    runtime: number;
    tmdbId?: number;
    posterUrl: string;
    backdropUrls: string[];
    videoUrl: string;
}


