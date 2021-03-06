import { ImageModel } from "./image.model"
import { OwnerModel } from "./owner.model"
import { TrackModel } from "./track.model"

export interface PlaylistModel {
    // collaborative: boolean
    // description: string
    // external_urls: ExternalUrls
    // followers: Followers
    // href: string
    id: string
    images: ImageModel[]
    name: string
    owner: OwnerModel
    // primary_color: any
    // public: boolean
    // snapshot_id: string
    tracks: TrackModel
    // type: string
    // uri: string
}