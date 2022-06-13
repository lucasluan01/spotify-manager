import { ImageModel } from "./image.model"

export interface UserProfileModel {
    // country: string
    display_name: string
    // email: string
    // explicit_content: ExplicitContent
    // external_urls: ExternalUrls
    // followers: Followers
    // href: string
    // id: string
    images: ImageModel[]
    // product: string
    // type: string
    // uri: string
}