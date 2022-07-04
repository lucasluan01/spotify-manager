import { ImageModel } from "./image.model";
import { TrackModel } from "./track.model";

export interface AlbumModel {
    // album_type: string
    // artists: Artist[]
    // available_markets: string[]
    // copyrights: Copyright[]
    // external_urls: ExternalUrls3
    // href:  string
    tracks: {
        items: TrackModel[]
    }
    id: string
    images: ImageModel[]
    name: string
    release_date: string
    // release_date_precision: string
    total_tracks: number
    // type: string
    // uri: string
}

// interface Copyright {
//     text: string
//     type: string
// }