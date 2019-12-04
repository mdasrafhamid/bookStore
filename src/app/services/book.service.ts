import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiEndPoint = 'http://10.127.149.175:8085/books/'

  books = [
    { id: 1, title: 'Angular', author: 'Jack', description: 'Description for angular course', isbn: 123456, image: 'img2.png', price: 99.99, date: new Date('11/12/2019'), category: 'technology', rating:3.14 },
    { id: 2, title: 'CoreJava', author: 'Harry', description: 'Description for core java course', isbn: 123456, image: 'img1.png', price: 12.10, date: new Date('11/5/2019'), category: 'lifestyle', rating:2.0 },
    { id: 3, title: 'React', author: 'Ben', description: 'Description for react course', isbn: 123456, image: 'img3.png', price: 1.50, date: new Date('11/2/2019'), category: 'history', rating:4.35 },
  ]
  constructor(private http: HttpClient) { }

  getAllBooks() {
    // return this.http.get<Book[]>(this.apiEndPoint)
    return this.books;
  }

  getAllBooksByCategory(category: string) {
    // return this.http.get<Book[]>(this.apiEndPoint)
    return this.books.find(i => i.category == category);
  }

  getBookById(bid: Number){
    return this.books.find(i => i.id == bid);
  }

  // removeMovie(movieId){

  // }

  // updateMovie(movie){

  // }

  // getMovie(movieId){

  // }

  // createMovie(movie){

  // }

}
