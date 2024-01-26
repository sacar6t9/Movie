import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-details-reviews",
  templateUrl: "./details-reviews.component.html",
  styleUrl: "./details-reviews.component.css",
})
export class DetailsReviewsComponent implements OnInit {
  movieRates:any[]= [];
    constructor(private httpClient:HttpClient,private movieService:MoviesService){}

    loadRates(){
      this.movieService.loadRates().subscribe((data)=>{
        this.movieRates = data;
      })
    }
    ngOnInit(): void {
        this.loadRates();
    }

}
