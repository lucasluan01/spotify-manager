import { ImageModel } from "./image.model";

export interface AlbumModel {
    // album_type: string
    // artists: Artist[]
    // available_markets: string[]
    // external_urls: ExternalUrls3
    // href:  
    id: string
    images: ImageModel[]
    name: string
    release_date: string
    // release_date_precision: string
    total_tracks: number
    // type: string
    // uri: string
}