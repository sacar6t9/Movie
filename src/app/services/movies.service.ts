import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieActor } from "../app-details-actors/app-details-actors.component";
import { SimilarMovies } from "../details-movie/details-movie.component";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}
  getFanfavoriteMovies() {
    return this.httpClient.get<any[]>("assets/fanFavoriteMovies.json");
  }
  getTopMovie() {
    return this.httpClient.get<any[]>("assets/topMovie.json");
  }
  loadMovieSummary() {
    return this.httpClient.get<any>("assets/movieSummary.json");
  }
  loadMovieActor() {
    return this.httpClient.get<MovieActor[]>("assets/movieActor.json");
  }
  loadSimilarMovies() {
    return this.httpClient.get<SimilarMovies[]>("assets/similarMovies.json");
  }

  loadRates() {
    return this.httpClient.get<any[]>("assets/detailsRate.json");
  }
  searchMovie() {
    return this.httpClient.get<any[]>("assets/searchMovie.json");
  }
}
