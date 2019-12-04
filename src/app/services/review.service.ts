import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiEndPoint = 'http://10.127.149.175:8085/'

  reviews = [
    { id: 1, headline: 'Good shit', comment: 'The book you would read when taking a dump', rating:4.14, time: new Date('1/12/2019'), cid: 1, bid:1},
    { id: 2, headline: 'More like toilet paper', comment: 'The book useful for wiping dat ass', rating:1.14, time: new Date('2/12/2019'), cid: 2, bid:1},
    { id: 3, headline: 'Not bad', comment: 'Good read, quality time when pooping', rating:3.14, time: new Date('3/12/2019'), cid: 3, bid:1},
    { id: 3, headline: 'Velli good!', comment: 'Velli velli good, better than sex!', rating:5.00, time: new Date('3/12/2019'), cid: 4, bid:2},
  ]

  constructor(private http: HttpClient) { }

  getAllReviews() {
    // return this.http.get<Book[]>(this.apiEndPoint)
    return this.reviews;
  }
  getReviewByBookId(bid:number) {
 
    return this.reviews.filter(i => i.bid === bid);
  }
  submitReview(review){
    console.log(review)
    return this.http.post(this.apiEndPoint+'reviews', review)
  }
}
