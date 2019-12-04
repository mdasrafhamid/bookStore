import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../custom-validators/custom-validators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private registerForm:FormGroup;
  get name(){
    return this.registerForm.get('name')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }
  get phone(){
    return this.registerForm.get('phone')
  }

  get address(){
    return this.registerForm.get('address')
  }

  get city(){
    return this.registerForm.get('city')
  }
  get zip(){
    return this.registerForm.get('zip')
  }
  get country(){
    return this.registerForm.get('country')
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(5)],CustomValidators.shouldBeUniqueUsername),
      email : new FormControl('', [Validators.required, Validators.minLength(5)]),
      password : new FormControl('', Validators.required),
      phone :new FormControl(),
      address :new FormControl(),
      city :new FormControl(),
      zip :new FormControl(),
      country :new FormControl()

      
    })
  }

  registerUser(){
    // console.log(this.registerForm)
    const {name, email, password, phone, address, city, zip, country} = this.registerForm.value
    const user = {name, email, password, phone, address, city, zip, country}
    console.log(user);
    this.userService.registerUser(user)
      .subscribe(
        (response)=>{
          console.log('user registered ',response)
        },
        (errorMessage: String) => {
          alert(errorMessage)
        }
      )
  }

  

}
