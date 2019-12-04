import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  login(form){
    console.log(form);
    this.userService.login(form.value)
      .subscribe(
        (response)=>{
          console.log('login success ',response)
          localStorage.setItem('token', response)
          this.router.navigate(['/movies'])

        },
        (errorMessage: String) => {
          alert(errorMessage)
        }
      )
      
  }

}
