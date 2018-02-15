import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Movie } from '../models/movie';

const url="http://localhost:3001/api/movies";

@Injectable()
export class MovieService {

  constructor(private httpclient:HttpClient) {}

  getMovies(){
    return this.httpclient.get<Movie[]>(url);
  }

  getMovie(movieid){
    console.log(movieid);
    return this.httpclient.get<Movie>(url+'/'+movieid);
  }

  addMovie(movie){
    return this.httpclient.post<Movie>(url,movie);
  }

  updateMovie(oldmovieid,newmovie){
    return this.httpclient.put<Movie>(url+'/'+oldmovieid,newmovie);
  }

}
