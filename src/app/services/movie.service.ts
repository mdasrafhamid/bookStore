import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie } from '../model/movie.model';
import { of } from 'rxjs';
import { Genre } from '../model/genre.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiEndPoint = 'http://localhost:3900/api/movies/'
  private apiGenPoint = 'http://localhost:3900/api/genres/'
  constructor(private http:HttpClient) { }

  getAllGenres(){
    return this.http.get<Genre[]>(this.apiGenPoint)
  }

  getAllMovies(){
    return this.http.get<Movie[]>(this.apiEndPoint)
  }

  removeMovie(movieId){
    return this.http.delete<Movie>(this.apiEndPoint+'/'+movieId)
  }

  updateMovie(movie){

  }

  getMovie(movieId){

  }

  createMovie(movie){
    
  }

  

}
