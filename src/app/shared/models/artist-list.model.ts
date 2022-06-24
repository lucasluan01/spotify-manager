import { ArtistModel } from "./artist.model"

export interface ArtistListModel {
    // href: string
    items: ArtistModel[]
    limit: number
    next: string
    // offset: number
    // previous: any
    total: number
}
