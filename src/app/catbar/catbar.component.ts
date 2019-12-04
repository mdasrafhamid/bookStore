import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-catbar',
  templateUrl: './catbar.component.html',
  styleUrls: ['./catbar.component.css']
})
export class CatbarComponent implements OnInit {

  initCategory : String = 'technology';
  constructor() { }

  ngOnInit() {
  }

  links: Array<String> = ["business","health","marketing","programming","technology","lifestyle","history"];

 
}
