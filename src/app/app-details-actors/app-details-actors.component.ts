import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

// Create an interface to describe the structure of an actor
export interface MovieActor {
  imageurl: string;
  actorName: string;
  role: string;
}

@Component({
  selector: 'app-app-details-actors',
  templateUrl: './app-details-actors.component.html',
  styleUrls: ['./app-details-actors.component.css']
})
export class AppDetailsActorsComponent implements OnInit {
  movieActors: MovieActor[] = [];

  constructor(private httpClient: HttpClient,private movieService:MoviesService) {}

  ngOnInit() {
    this.loadMovieActor();
  }

  loadMovieActor() {
    this.movieService.loadMovieActor().subscribe((data: MovieActor[]) => {
      this.movieActors = data;
    });
  }
}
