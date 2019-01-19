import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {
  
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)], UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
