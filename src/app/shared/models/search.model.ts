
import { AlbumListModel } from "./album-list.model"
import { ArtistListModel } from "./artist-list.model"
import { PlaylistListModel } from "./playlist-list.model"
import { TrackListModel } from "./tracklist.model"

export interface SearchModel {
    albums: AlbumListModel
    artists: ArtistListModel
    tracks: TrackListModel
    playlists: PlaylistListModel
}