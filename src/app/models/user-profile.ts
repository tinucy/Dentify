//src/app/models/user-profile.ts

//Define the UserProfile class
export class UserProfile {
  //Define properties for the class

  username: string;
  email: string;
  age: number;
  isLoggedIn: boolean;

  //Constructor to initialize the properties

  constructor(username: string, email: string, age: number) {
    this.username = username;
    this.email = email;
    this.age = age;
    this.isLoggedIn = false; //Default value
  }

  //Method to log in the user

  login() {
    this.isLoggedIn = true;
  }

  //Method to log out the user
  logout() {
    this.isLoggedIn = false;
  }

  //Method to update the email
  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}
