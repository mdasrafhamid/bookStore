import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies : Movie[] = [];
  
   
  constructor(private movieService:MovieService, private router:Router) {

  }

  ngOnInit() {
    this.movieService.getAllMovies()
          .subscribe(
            (response)=>{
              console.log('Response successfully received');
              console.log(response);
              this.movies=response;
            },
            (errorMessage:String) =>{
              alert(errorMessage)
            }
          )
  }

  handleRemove(movie){
    this.movieService.removeMovie(movie._id)
          .subscribe(
            (movie)=>{
              console.log('Movie deleted...')
              this.movies = this.movies.filter(m=>m._id!=movie._id)
            }
          )
  }

  handleAdd(){
    this.router.navigate(['/movieform'])
  }
}
