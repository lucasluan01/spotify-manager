import { TrackModel } from "./track.model"

export interface AlbumItemsModel {
    href: string
    items: TrackModel[]
    limit: number
    next: any
    offset: number
    previous: any
    total: number
}