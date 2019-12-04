import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  
  @Input()
  private book:Book;

  @Output()
  private bookSelect:EventEmitter<Book>;

  constructor(private router:Router) {
    this.bookSelect=new EventEmitter();
   }

  ngOnInit() {
  }

  onSelect(){
    console.log(this.book);
    this.router.navigate(["/bookdetails", this.book.id]);

  }

}
