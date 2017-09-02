export interface LibraryGenerationStatus {
    state: string;
    isProcessing: boolean;
    lastGeneratedDate: Date;
    movieCountTotal: number;
    movieCountCurrent: number;
    countTotal: number;
    countCurrent: number;
    secondsRemaining: number;
    activeMovies: string[];
}