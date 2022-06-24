
import { AlbumListModel } from "./album-list.model"
import { ArtistListModel } from "./artist-list.model"
import { PlaylistListModel } from "./playlist-list.model"
import { TrackModel } from "./track.model"

export interface SearchModel {
    albums: AlbumListModel
    artists: ArtistListModel
    tracks: TrackModel
    playlists: PlaylistListModel
}