import { Component } from '@angular/core';
import { UserProfile } from '../models/user-profile';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Create an instance of UserProfile
  user: UserProfile;
  newEmail: string = ''; //Property to hold new email input

  //Initialize the user instance with default values
  constructor() {
    this.user = new UserProfile('johnDoe', 'john@example.com', 30);
  }

  //Method to log in the user

  loginUser() {
    this.user.login();
    console.log(this.user.isLoggedIn); //true
  }

  //Method to log out the user
  logoutUser() {
    this.user.logout();
    console.log(this.user.isLoggedIn); //false
  }

  //Method to update the user's email
  updateEmail(newEmail: string) {
    this.user.updateEmail(newEmail);
    console.log(this.user.email); //new email
  }
}
