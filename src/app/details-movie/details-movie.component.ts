import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
export interface SimilarMovies{
  imageUrl:string;
  title: string;
  rate:number
}

@Component({
  selector: "app-details-movie",
  templateUrl: "./details-movie.component.html",
  styleUrl: "./details-movie.component.css",
})
export class DetailsMovieComponent implements OnInit{

  similarMovies:SimilarMovies[] = [];
    
  constructor(private movieService:MoviesService) {
  }
  loadSimilarMovies(){
    this.movieService.loadSimilarMovies().subscribe((data)=>{
      console.log("Data Loaded"+data);
      this.similarMovies=data
    })
  }
  ngOnInit(): void {
      this.loadSimilarMovies();
  }
}
