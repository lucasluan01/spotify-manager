import { AlbumModel } from "./album.model"
import { ArtistModel } from "./artist.model"
import { ImageModel } from "./image.model"

export interface TrackModel {
    album: AlbumModel
    artists: ArtistModel[]
    // available_markets: string[]
    // disc_number: number
    duration_ms: number
    // episode: boolean
    // explicit: boolean
    // external_ids: ExternalIds
    // external_urls: ExternalUrls5
    // href: string
    id: string
    // is_local: boolean
    name: string
    // popularity: number
    // preview_url: string
    // track: boolean
    // track_number: number
    // type: string
    // uri: string
    
    images: ImageModel[]
    total: number //
}
