import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  private id: number;
  private book: Book;
  private
  constructor(private bookService: BookService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("book-details received: "+this.id);
    this.book = this.bookService.getBookById(this.id);
  }

}