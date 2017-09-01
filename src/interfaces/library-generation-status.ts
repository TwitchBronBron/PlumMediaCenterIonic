export interface LibraryGenerationStatus {
    state: string;
    isProcessing: boolean;
    lastGeneratedDate: Date;
    movieCountTotal: number;
    movieCountCurrent: number;
    activeMovies: string[];
}