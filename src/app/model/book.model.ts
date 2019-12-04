import { Review } from './review.model';
import { Category } from './category.model';

export class Book{

    public id:number;
    public title:string;
    public author:string;
    public description:string;
    public isbn:number;
    public image:string;
    public price:number;
    public date:Date;
    public category:string;
    // public review:Review[];
    public rating:number;
}