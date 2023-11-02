import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html"
})
export class LogInComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";
  sub!: Subscription;

  constructor(private httpClient: HttpClient, private router: Router) {}
  login() {
    this.errorMessage = "";
    // verify data
    if (!this.username || !this.password) {
      this.errorMessage = "Please fill in all required fields.";
      return;
    }

    // send data to server
    const apiAddress = "https://localhost:7181/api/v1/users/log-in";

    const body = {
      UserName: this.username,
      Password: this.password,
    };

    this.sub = this.httpClient.post(apiAddress, body, {withCredentials: true}).subscribe({
      next: res => this.router.navigate(["/products"]),
      error: err => this.errorMessage = err.error
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
