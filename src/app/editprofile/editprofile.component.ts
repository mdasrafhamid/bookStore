import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  private user:User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user=this.userService.getCUser();
    console.log(this.user);
  }

}
