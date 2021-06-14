import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user:User = {
  	name: null,
  	phone_number: null,
  	email: null,
  	birthday: null,
  	gender: null
  };
  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  saveUser(){
  	  this.userService.save(this.user).subscribe((data) => {
  		alert('User created successfully');
  	}, (error) => {
  		alert('An error has occurred');
  	} );
  }

}
