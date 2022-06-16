import { AlbumModel } from "./album.model"
import { ArtistModel } from "./artist.model"
import { PlaylistListModel } from "./playlist-list.model"
import { TrackModel } from "./track.model"

export interface SearchModel {
    albums: AlbumModel
    artists: ArtistModel
    tracks: TrackModel
    playlists: PlaylistListModel
}