import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface User {
  username: string;
  password: string;
  passwordAgain: string;
}
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html"
})
export class SignUpComponent {
  user: User = {username: "", password: "", passwordAgain: ""};
  errorMessage: string = "";

  constructor(private httpClient: HttpClient) {}

  onRegister() {
    this.errorMessage = "";
    // verify data
    if (!this.user.username || !this.user.password || !this.user.passwordAgain) {
      this.errorMessage = "Please fill in all required fields.";
      return;
    }
    if (this.user.password !== this.user.passwordAgain) {
      this.errorMessage = "The two passwords are different!";
      return;
    }

    // send data to server
    const apiAddress = "https://localhost:7181/api/v1/users";

    const body = {
      UserName: this.user.username,
      Password: this.user.password,
    };

    console.log(body);

    this.httpClient.post(apiAddress, body, {withCredentials: true}).subscribe(res => {
      console.log(res);
    });
  }
}
