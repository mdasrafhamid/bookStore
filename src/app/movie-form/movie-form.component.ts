import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Genre } from '../model/genre.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  private movieForm: FormGroup;
  get title() {
    return this.movieForm.get('title')
  }

  get genre() {
    return this.movieForm.get('genre')
  }
  get stock() {
    return this.movieForm.get('stock')
  }

  get rate() {
    return this.movieForm.get('rate')
  }


  private genres: Genre[] = [];

  constructor(private movieService: MovieService) {
    this.movieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.movieService.getAllGenres()
      .subscribe(
        (response) => {
          console.log('Response successfully received');
          console.log(response);
          this.genres = response;
        },
        (errorMessage: String) => {
          alert(errorMessage)
        }
      )
  }

  addMovie(){
    console.log('adding movie');
    this.movieService.createMovie(this.movieForm);
  }
}
