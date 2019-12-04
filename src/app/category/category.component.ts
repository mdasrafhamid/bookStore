import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private books: Book[];
  private booksByCategory: Book[];

  @Input()
  category: String = null;
  private selectedBook: Book = null;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    // this.route.params.subscribe(param => {
    //   // write some code
    //   this.category = this.route.snapshot.paramMap.get('name');
    //   console.log(this.category);
    //   this.bookService.getAllBooks()
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
    //   this.booksByCategory = this.books.filter(
    //     book => book.category == this.category);
    // });
    this.route.params.subscribe(param => {
      
      this.books = this.bookService.getAllBooks();
      
      this.category = this.route.snapshot.paramMap.get('name');
      console.log(this.category);
      this.booksByCategory = this.books.filter(
        book => book.category == this.category);
      console.log(this.booksByCategory)

    });
  }
  ngOnDestroy() {

  }

  onSelect(event) {
    this.selectedBook = event;
    console.log(event);
    this.router.navigate(["/bookdetails", this.selectedBook.id]);

  }

}
