import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent implements OnInit {

  private user:User=null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user=this.userService.getCUser();
  }

}
