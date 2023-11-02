import {Component} from "@angular/core";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html"
})
export class LogInComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  login() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}
