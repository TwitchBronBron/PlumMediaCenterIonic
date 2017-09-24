import { MediaTypeId } from "../enums/media-type-id";

export interface MediaHistoryRecord {
    mediaTypeId: MediaTypeId;
    posterUrl: string;
    title: string;
    runtimeMinutes: number;
    progressMinutesBegin: number;
    progressMinutesEnd: number;
    totalProgressMinutes: number;
    id: number;
    profileId: number;
    mediaItemId: number;
    dateBegin: string;
    dateEnd: string;
}

