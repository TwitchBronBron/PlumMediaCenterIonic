export interface LibraryGenerationStatus {
    state: string;
    lastGeneratedDate: Date;
    movieCountTotal: number;
    movieCountCurrent: number;
    activeMovies: string[];
}