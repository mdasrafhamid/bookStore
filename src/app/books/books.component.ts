import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private books: Book[];
  private selectedBook: Book = null;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {

    // this.bookService.getAllBooks()
    //   .subscribe(
    //     (response) => {
    //       console.log('Response successfully received');
    //       console.log(response);
    //       this.books = response;
    //     },
    //     (errorMessage: String) => {
    //       alert(errorMessage)
    //     }
    //   )

    this.books=this.bookService.getAllBooks()
  }


  onSelect(event) {
    this.selectedBook = event;
    console.log(event);
    this.router.navigate(["/bookdetails", this.selectedBook.id]);

  }
}
