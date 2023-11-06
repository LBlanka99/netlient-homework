import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["log-in"]);
      return false;
    }
    return true;
  }

}
