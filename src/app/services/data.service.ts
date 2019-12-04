import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Category } from '../model/category.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
