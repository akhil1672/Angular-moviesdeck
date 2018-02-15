import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovieshomeComponent } from './movieshome/movieshome.component';
import { MovieService } from '../services/movie.service';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [AddmovieComponent, MoviedetailsComponent, MovieshomeComponent],
  providers:[MovieService],
})
export class MoviesModule { }
