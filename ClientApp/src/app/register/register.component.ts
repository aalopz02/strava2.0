import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  userToSend: User = new User;

  constructor(private formB: FormBuilder, private userService: UserService) {

    this.registerUserForm = this.formB.group({
      fname: '',
      mname: '',
      lname: '',
      birthday: '',
      nationality: '',
      username: '',
      password: ''
    });

   }

   registerSendForm(formValue: any){
    this.userToSend = Object.assign(this.userToSend, formValue);
    console.log(this.userToSend);
    console.log(formValue.birthday.toString());
    this.userService.POSTUser(this.userToSend);
   }

  ngOnInit(): void {

  }

}
