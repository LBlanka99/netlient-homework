import {Component, OnDestroy} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

interface User {
  username: string;
  password: string;
  passwordAgain: string;
}
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html"
})
export class SignUpComponent implements OnDestroy{
  user: User = {username: "", password: "", passwordAgain: ""};
  errorMessage: string = "";
  sub!: Subscription;

  constructor(private httpClient: HttpClient, private router: Router) {}

  onRegister(): void {
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

    this.sub = this.httpClient.post(apiAddress, body, {withCredentials: true}).subscribe({
      next: user => this.router.navigate(["/log-in"]),
      error: err => this.errorMessage = err.error
    });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
