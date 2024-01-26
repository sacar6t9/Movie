import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  constructor(private movieService:MoviesService) {}
  fanFavoriteMovies: any[] = [];

  topMovie: any[] = [];
  ngOnInit(): void {
    this.getFanfavoriteMovies();
    this.getTopMovie();
  }
  getFanfavoriteMovies() {
    this.movieService.getFanfavoriteMovies().subscribe({
      next: (data: any[]) => {
        this.fanFavoriteMovies = data;
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  getTopMovie() {
    this.movieService.getTopMovie().subscribe({
    next:(data:any[])=>{
      this.topMovie=data;
    },
  error:(error)=>{
    console.log('error occured')
  },
  complete:()=>{console.log("completeed")}
})
  }
}
