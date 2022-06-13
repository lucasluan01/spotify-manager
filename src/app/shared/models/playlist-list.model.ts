import { ImageModel } from "./image.model"
import { OwnerModel } from "./owner.model"


export interface PlaylistListModel {
    // href: string
    items: Item[]
    limit: number
    next: string
    // offset: number
    // previous: any
    total: number
}

interface Item {
    // collaborative: boolean
    // description: string
    // external_urls: ExternalUrls
    // href: string
    id: string 
    images: ImageModel[]
    name: string
    owner: OwnerModel
    // primary_color: any
    // public: boolean
    // snapshot_id: string
    // tracks: Tracks
    // type: string
    // uri: string
}
