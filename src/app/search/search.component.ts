import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private queryString:String;
  private books:Book[];
  constructor(private bookService: BookService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      
      // this.bookService.getAllBooks()
      // .subscribe(
      //   (response) => {
      //     console.log('Response successfully received');
      //     console.log(response);
      //     this.books = response;
      //   },
      //   (errorMessage: String) => {
      //     alert(errorMessage)
      //   }
      // )
      this.books=this.bookService.getAllBooks()
      this.queryString = this.route.snapshot.paramMap.get('keyword');
      console.log(this.queryString);
      
    });

    
  }

  ngOnDestroy() {
  }
  
}
