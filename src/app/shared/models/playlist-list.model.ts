import { PlaylistModel } from "./playlist.model"


export interface PlaylistListModel {
    // href: string
    items: PlaylistModel[]
    limit: number
    next: string
    // offset: number
    // previous: any
    total: number
}
