import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';
import { ReviewService } from '../services/review.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  private bid: number;
  private cid: number;
  private user: User;
  private book: Book;
  private bRating: number;

  private reviewForm:FormGroup;
  get name(){
    return this.reviewForm.get('rating')
  }

  get email(){
    return this.reviewForm.get('headline')
  }

  get password(){
    return this.reviewForm.get('comment')
  }

  constructor(private userService: UserService, private bookService: BookService, private reviewService:ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.bid = parseInt(queryParams.get("bid"));
      this.cid = parseInt(queryParams.get("cid"));
    })

    this.book = this.bookService.getBookById(this.bid);
    this.user = this.userService.getCUser();

    console.log(this.bid +", " +this.cid)
    this.bRating = this.book.rating;

    this.reviewForm = new FormGroup({
      // name : new FormControl('', [Validators.required, Validators.minLength(5)],CustomValidators.shouldBeUniqueUsername),
      // email : new FormControl('', [Validators.required, Validators.minLength(5)]),
      // password : new FormControl('', Validators.required),
      // phone :new FormControl(),
      // address :new FormControl(),
      // rating :new FormControl(),
      headline :new FormControl(),
      comments :new FormControl()

      
    })

  }

  onSubmit() {
    const {headline, comments} = this.reviewForm.value;
    const rating = this.bRating;
    const book = this.bid;
    const customer = this.cid;
    const review = {rating, headline, comments, book, customer};
    console.log(review);

    this.reviewService.submitReview(review)
      .subscribe(
        (response)=>{
          console.log('response from review submit ',response)
        },
        (errorMessage: String) => {
          alert(errorMessage)
        }
      )
  }

}
