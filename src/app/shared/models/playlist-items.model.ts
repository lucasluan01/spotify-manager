import { TrackModel } from "./track.model"

export interface PlaylistItemsModel {
    // href: string
    items: Item[]
    limit: number
    next: string
    // offset: number
    // previous: any
    total: number
}

interface Item {
    added_at: string
    // added_by: AddedBy
    // is_local: boolean
    // primary_color: any
    track: TrackModel
    // video_thumbnail: VideoThumbnail
}