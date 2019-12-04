import { Genre } from './genre.model';

export class Movie {

    public _id?:string;
    public _title:string;
    public _numberInStock:string;
    public _dailyRentalRate:string;
    public genre:Genre;
}