import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/myInterceptor';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CatbarComponent } from './catbar/catbar.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdRatingDecimalComponent } from './ngbd-rating-decimal/ngbd-rating-decimal.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchItemComponent } from './search-item/search-item.component';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReviewComponent } from './review/review.component';

const appRoutes:Routes = [

  {path : '', component:HomeComponent},
  {path : 'login', component:LoginFormComponent},
  {path : 'register', component:RegisterFormComponent},
  {path : 'movies', component:MoviesComponent},
  {path : 'movieform', component:MovieFormComponent},
  {path : 'category/:name', component:CategoryComponent},
  {path : 'bookdetails/:id', component:BookDetailsComponent},
  {path : 'search/:keyword', component:SearchComponent},
  {path : 'showprofile', component:ShowprofileComponent},
  {path : 'editprofile', component:EditprofileComponent},
  {path : 'review', component:ReviewComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MoviesComponent,
    HomeComponent,
    NavbarComponent,
    MovieFormComponent,
    CatbarComponent,
    BooksComponent,
    CategoryComponent,
    SingleBookComponent,
    NgbdRatingDecimalComponent,
    BookDetailsComponent,
    ReviewsComponent,
    SearchComponent,
    SearchPipe,
    SearchItemComponent,
    ShowprofileComponent,
    EditprofileComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:MyInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
