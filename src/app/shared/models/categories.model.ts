import { ImageModel } from "./image.model"

export interface CategoriesModel {
    categories: Categories
}

interface Categories {
    // href: string
    items: Item[]
    limit: number
    next: string
    // offset: number
    // previous: any
    // total: number
}

interface Item {
    // href: string
    icons: ImageModel[]
    id: string
    name: string
}