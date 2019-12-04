import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  @Input()
  private book:Book;

  @Output()
  private bookSelect:EventEmitter<Book>;

  constructor() {
    this.bookSelect=new EventEmitter();
   }

  ngOnInit() {
  }
  
  onSelect(){
    this.bookSelect.emit(this.book);
    console.log("clicked")
  }

}
