import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private keywords:String;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  onSearch(search$){
    console.log(search$.value)
    this.keywords=search$.value;
    this.router.navigate(["/search", this.keywords]);
  }
}
