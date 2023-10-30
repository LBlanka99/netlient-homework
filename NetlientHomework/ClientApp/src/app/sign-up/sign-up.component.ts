import {Component} from "@angular/core";

interface User {
  username: string;
  password: string;
}
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html"
})
export class SignUpComponent {
  user: User = {username: "", password: ""};

  onRegister() {
    console.log(this.user);
  }
}
