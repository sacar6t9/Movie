import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
movieTitle='';
searchResults:any[]=[];
constructor(private activatedRoute:ActivatedRoute,private httpClient:HttpClient,private movieService:MoviesService){
  this.activatedRoute.params.subscribe((p)=>{
    this.movieTitle=p['movieTitle']
  })

}
searchMovie(){
  this.movieService.searchMovie().subscribe((data)=>{
    this.searchResults=data
  })
}
ngOnInit(): void {
    this.searchMovie()
}
}
