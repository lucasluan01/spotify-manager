import { ImageModel } from "./image.model"

export interface ArtistModel {
    // external_urls: ExternalUrls
    followers: Followers
    // genres: string[]
    // href: string
    id: string
    images: ImageModel[]
    name: string
    // popularity: number
    // type: string
    // uri: string
}

interface Followers {
    href: any
    total: number
}