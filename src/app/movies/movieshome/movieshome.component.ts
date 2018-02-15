import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movieshome',
  templateUrl: './movieshome.component.html',
  styleUrls: ['./movieshome.component.css']
})
export class MovieshomeComponent implements OnInit {

  private movies:Movie[]

  constructor(private router:Router,private movieservice:MovieService) { }

  ngOnInit() {
    this.movieservice.getMovies().subscribe((response)=>{
      this.movies=response;
      console.log("Movies"+this.movies);
    })
  }

}
