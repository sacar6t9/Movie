import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  movieId=''
constructor(private activatedRoute:ActivatedRoute,private movieService:MoviesService){
  this.activatedRoute.params.subscribe((p)=>{
    this.movieId=p['id'];
  })
  
}
ngOnInit(): void {
    this.loadMovieSummary();
}
Stars=[]
directors=[]
genres=[]
loadMovieSummary(){
  this.movieService.loadMovieSummary().subscribe((data:any)=>{
    console.log(data)
    this.Stars=data.Stars
    this.directors=data.Directors
    this.genres=data.Genres
  })
}
}
