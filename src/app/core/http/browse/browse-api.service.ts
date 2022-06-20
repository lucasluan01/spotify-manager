import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriesModel } from 'src/app/shared/models/categories.model';
import { CategoryPlaylistModel } from 'src/app/shared/models/category-playlist.model';
import { FeaturedPlaylistsModel } from 'src/app/shared/models/featured-playlists.model';
import { NewReleasesModel } from 'src/app/shared/models/new-releases.model';

@Injectable({
  providedIn: 'root'
})
export class BrowseApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getBrowseCategories(offset: number = 0): Observable<CategoriesModel> {
    return this._http.get<CategoriesModel>(`${environment.apiUrl}/${environment.browse}/categories?country=${environment.country}&locale=${environment.locale}&limit=50&offset=${offset}`);
  }

  getCategoryPlaylists(id: string, offset: number = 0): Observable<CategoryPlaylistModel> {
    return this._http.get<CategoryPlaylistModel>(`${environment.apiUrl}/${environment.browse}/${environment.categories}/${id}/playlists?country=${environment.country}&limit=50&offset=${offset}`);
  }

  getFeaturedPlaylists(offset: number = 0): Observable<FeaturedPlaylistsModel> {
    return this._http.get<FeaturedPlaylistsModel>(`${environment.apiUrl}/${environment.browse}/featured-playlists?country=${environment.country}&locale=${environment.locale}&limit=12&offset=${offset}`);
  }

  getNewReleases(offset: number = 0): Observable<NewReleasesModel> {
    return this._http.get<NewReleasesModel>(`${environment.apiUrl}/${environment.browse}/new-releases?country=${environment.country}&limit=12&offset=${offset}`);
  }

}
