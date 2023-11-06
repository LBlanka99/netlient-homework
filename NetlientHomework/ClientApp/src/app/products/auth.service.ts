import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {


  isAuthenticated(): boolean {
    return document.cookie.split(";").some((cookie) => cookie.trim().startsWith("id="));
  }
}
