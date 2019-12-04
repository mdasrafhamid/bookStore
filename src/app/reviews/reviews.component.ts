import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { Review } from '../model/review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  private reviews:Review[];
  
  @Input()
  private bookId:number;

  constructor(private reviewService:ReviewService, private router:Router) { }

  ngOnInit() {
    this.reviews=this.reviewService.getReviewByBookId(this.bookId);
    console.log(this.bookId);

  }

  onClick() {
    console.log("navigate me!")
    this.router.navigate(['/review'], { queryParams: { bid: this.bookId, cid : 1 } });
  }
}
