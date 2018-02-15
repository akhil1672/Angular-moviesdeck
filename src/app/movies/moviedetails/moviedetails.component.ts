import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movie: Movie;
  constructor(private moviesservice: MovieService, private aroute: ActivatedRoute) { }

  updateMovie(movie){
    this.moviesservice.updateMovie(movie.Id,movie).subscribe((movie)=>{
      console.log("updated movie");
    })
  }

  ngOnInit() {
    this.moviesservice.getMovie(this.aroute.snapshot.params['id']).subscribe((movie) => {
      this.movie = movie;
      console.log(movie.Name);
    })
  }

}
