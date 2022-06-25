import { TrackModel } from "./track.model"

export interface RecentlyPlayedItemsModel {
    // items: Item[]
    // next: string
    // cursors: Cursors
    // limit: number
    // href: string
}

interface Item {
    // track: TrackModel
    // played_at: string
    // context: any
}

interface Cursors {
    // after: string
    // before: string
}